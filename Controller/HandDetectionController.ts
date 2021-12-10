import { NextFunction, Request, Response } from "express";
import { CaseDao } from "../Dao/CaseDao";
import { DEL_FLAG, WeightNumber } from "../shared/constants";
import { Case } from "../Models/Case";
import { Maybe } from "../shared";
import { sumEnum, throwHttpError } from "../shared/functions";
import { HandShape } from "../Models/HandShape";
import { DirectionOfPalmsAndFinger } from "../Models/DirectionOfPalmsAndFinger";
import { FingerOpening } from "../Models/FingerOpening";
import { FingerShape } from "../Models/FingerShape";
import { HandMovement } from "../Models/HandMovement";
import { OkPacket } from "mysql"
interface ISelectedCase {
  weightedValue: number;
  case: Maybe<Case>;
}

export class HandDetectionController {
  private caseDao: CaseDao;

  constructor() {
    this.caseDao = new CaseDao();
    // console.log("a",this.caseDao);
    this.detectHand = this.detectHand.bind(this);
  }

  public async detectHand(req: Request, res: Response, next: NextFunction) {
    const {
      directionOfPalmAndFinger,
      fingerOpening,
      fingerShape,
      handMovement,
      handShape,
    } = req.body;

    try {
      const listCase: Array<Case> = await this.caseDao.getAll();
      const arrValue: Array<number> = [];
      let maxCase: ISelectedCase = {
        weightedValue: 0,
        case: null,
      };

      for (let index = 0; index < listCase.length; index++) {
        let _case = listCase[index];
        let sumWeightedValue = sumEnum(WeightNumber);
        let computedValue =
          (WeightNumber.HAND_SHAPE *
            (_case.get_handShape()?.getIdHandShape().toString() ===
            handShape.toString()
              ? 1
              : 0) +
            WeightNumber.DIRECTION_OF_PALMS_AND_FINGER *
              (_case
                .get_directionOfPalmsAndFinger()
                ?.getIdDirectionOfPalmsAndFinger()
                .toString() === directionOfPalmAndFinger.toString()
                ? 1
                : 0) +
            WeightNumber.FINGER_OPENING *
              (_case.get_fingerOpening()?.getIdFingerOpening().toString() ===
              fingerOpening.toString()
                ? 1
                : 0) +
            WeightNumber.FINGER_SHAPE *
              (_case.get_fingerShape()?.getIdFingerShape().toString() ===
              fingerShape.toString()
                ? 1
                : 0) +
            WeightNumber.HAND_MOVEMENT *
              (_case.get_handMovement()?.getIdHandMovement().toString() ===
              handMovement.toString()
                ? 1
                : 0)) /
          sumWeightedValue;

        arrValue.push(computedValue);

        if (computedValue > maxCase.weightedValue || computedValue === 1)
          maxCase = {
            weightedValue: computedValue,
            case: listCase[index],
          };

        if (computedValue === 1) break;
      }

      console.log(arrValue);

      if (maxCase.weightedValue !== 1 && maxCase.case) {
        const result: OkPacket = await this.caseDao.insertNewCase(
          new Case(
            "",
            maxCase.case.getCaseNameResult(),
            new DirectionOfPalmsAndFinger(
              directionOfPalmAndFinger,
              "",
              DEL_FLAG.VALID
            ),
            new FingerOpening(fingerOpening, "", DEL_FLAG.VALID),
            new FingerShape(fingerShape, "", DEL_FLAG.VALID),
            new HandMovement(handMovement, "", DEL_FLAG.VALID),
            new HandShape(handShape, "", DEL_FLAG.VALID),
            DEL_FLAG.VALID
          )
        );

        const newCase = await this.caseDao.getCaseById(result.insertId);
        res.json({
          case: newCase,
          message: "New case from system",
          type: 1,
        });
        return;
      }

      res.json({
        case: maxCase,
        message: "Old case from system",
        type: 0,
      });
    } catch (e) {
      console.log(e);
      throwHttpError("Something wrong", 400, next);
    }
  }
}
