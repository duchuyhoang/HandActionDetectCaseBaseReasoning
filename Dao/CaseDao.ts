import { DBConnector } from "../DBConnector";
import { Case } from "../Models/Case";
import { HandShape } from "../Models/HandShape";
import { DirectionOfPalmsAndFinger } from "../Models/DirectionOfPalmsAndFinger";
import { FingerOpening } from "../Models/FingerOpening";
import { FingerShape } from "../Models/FingerShape";
import { HandMovement } from "../Models/HandMovement";

import { MysqlError, OkPacket } from "mysql";
import { DEL_FLAG } from "../shared/constants";
import { Maybe } from "../shared";
export class CaseDao extends DBConnector {
  constructor() {
    super();
    // this.DBConnector=new DBConnector();
    // DBConnector.connectDb();
  }

  async getAll() {
    const connection = await this.handleConnect();
    return new Promise<Array<Case>>((resolve, reject) => {
      connection.query(
        `SELECT hand_case.*,
    direction_of_palm_and_finger.id_direction_of_palm_and_finger,direction_of_palm_and_finger.direction_of_palm_and_finger_name,
    finger_opening.id_finger_opening,finger_opening.name_finger_opening,
    finger_shape.id_finger_shape,finger_shape.finger_shape_name,
    hand_movement.id_hand_movement,hand_movement.hand_movement_name,
    hand_shape.hand_shape_name,hand_shape.id_hand_shape
    FROM hand_case
    LEFT JOIN direction_of_palm_and_finger ON hand_case._id_direction_of_palm_and_finger=direction_of_palm_and_finger.id_direction_of_palm_and_finger AND direction_of_palm_and_finger.delFlag=${DEL_FLAG.VALID}
    LEFT JOIN finger_opening ON hand_case._id_finger_open=finger_opening.id_finger_opening AND finger_opening.delFlag=${DEL_FLAG.VALID}
    LEFT JOIN finger_shape ON hand_case._id_finger_shape=finger_shape.id_finger_shape AND finger_shape.delFlag=${DEL_FLAG.VALID}
    LEFT JOIN hand_movement ON hand_case._id_hand_movement=hand_movement.id_hand_movement AND hand_movement.delFlag=${DEL_FLAG.VALID}
    LEFT JOIN hand_shape ON hand_case._id_hand_shape=hand_shape.id_hand_shape AND hand_shape.delFlag=${DEL_FLAG.VALID}
    WHERE hand_case.delFlag=${DEL_FLAG.VALID};`,
        (err: MysqlError | null, results: any) => {
          let listCase: Array<Case> = [];

          results.forEach((caseQuery: any) =>
            listCase.push(
              new Case(
                caseQuery.id_case,
                caseQuery.case_name_result,
                caseQuery._id_direction_of_palm_and_finger
                  ? new DirectionOfPalmsAndFinger(
                      caseQuery._id_direction_of_palm_and_finger,
                      caseQuery.direction_of_palm_and_finger_name,
                      DEL_FLAG.VALID
                    )
                  : null,
                caseQuery._id_finger_open
                  ? new FingerOpening(
                      caseQuery._id_finger_open,
                      caseQuery.name_finger_opening,
                      DEL_FLAG.VALID
                    )
                  : null,
                caseQuery._id_finger_shape
                  ? new FingerShape(
                      caseQuery._id_finger_shape,
                      caseQuery.finger_shape_name,
                      DEL_FLAG.VALID
                    )
                  : null,
                caseQuery._id_hand_movement
                  ? new HandMovement(
                      caseQuery._id_hand_movement,
                      caseQuery.hand_movement_name,
                      DEL_FLAG.VALID
                    )
                  : null,
                caseQuery._id_hand_shape
                  ? new HandShape(
                      caseQuery._id_hand_shape,
                      caseQuery.hand_shape_name,
                      DEL_FLAG.VALID
                    )
                  : null,
                DEL_FLAG.VALID
              )
            )
          );

          resolve(listCase);
        }
      );
    });
  }

  async insertNewCase(newCase: Case) {
    const connection = await this.handleConnect();
    return new Promise<OkPacket>((resolve, reject) => {
      connection.query(
        `INSERT INTO hand_case(case_name_result,_id_direction_of_palm_and_finger,_id_finger_open,_id_finger_shape,_id_hand_movement,_id_hand_shape) VALUES(?,?,?,?,?,?)`,
        [
          newCase.getCaseNameResult(),
          newCase
            .get_directionOfPalmsAndFinger()
            ?.getIdDirectionOfPalmsAndFinger() || null,
          newCase.get_fingerOpening()?.getIdFingerOpening() || null,
          newCase.get_fingerShape()?.getIdFingerShape() || null,
          newCase.get_handMovement()?.getIdHandMovement() || null,
          newCase.get_handShape()?.getIdHandShape() || null,
        ],
        (err: MysqlError | null, results: any) => {
          if (err) reject(err);
          resolve(results);
        }
      );
    });
  }

  async getCaseById(id: string | number) {
    const connection = await this.handleConnect();
    return new Promise<Case | null>((resolve, reject) => {
      connection.query(
        `SELECT hand_case.*,
    direction_of_palm_and_finger.id_direction_of_palm_and_finger,direction_of_palm_and_finger.direction_of_palm_and_finger_name,
    finger_opening.id_finger_opening,finger_opening.name_finger_opening,
    finger_shape.id_finger_shape,finger_shape.finger_shape_name,
    hand_movement.id_hand_movement,hand_movement.hand_movement_name,
    hand_shape.hand_shape_name,hand_shape.id_hand_shape
    FROM hand_case
    LEFT JOIN direction_of_palm_and_finger ON hand_case._id_direction_of_palm_and_finger=direction_of_palm_and_finger.id_direction_of_palm_and_finger AND direction_of_palm_and_finger.delFlag=${DEL_FLAG.VALID}
    LEFT JOIN finger_opening ON hand_case._id_finger_open=finger_opening.id_finger_opening AND finger_opening.delFlag=${DEL_FLAG.VALID}
    LEFT JOIN finger_shape ON hand_case._id_finger_shape=finger_shape.id_finger_shape AND finger_shape.delFlag=${DEL_FLAG.VALID}
    LEFT JOIN hand_movement ON hand_case._id_hand_movement=hand_movement.id_hand_movement AND hand_movement.delFlag=${DEL_FLAG.VALID}
    LEFT JOIN hand_shape ON hand_case._id_hand_shape=hand_shape.id_hand_shape AND hand_shape.delFlag=${DEL_FLAG.VALID}
    WHERE hand_case.delFlag=${DEL_FLAG.VALID} AND hand_case.id_case=?;`,
        [id],
        (err: MysqlError | null, results: any) => {
          if (err) reject(err);

          if (results.length === 0) resolve(null);
          else {
            const caseQuery = results[0];
            resolve(
              new Case(
                caseQuery.id_case,
                caseQuery.case_name_result,
                caseQuery._id_direction_of_palm_and_finger
                  ? new DirectionOfPalmsAndFinger(
                      caseQuery._id_direction_of_palm_and_finger,
                      caseQuery.direction_of_palm_and_finger_name,
                      DEL_FLAG.VALID
                    )
                  : null,
                caseQuery._id_finger_open
                  ? new FingerOpening(
                      caseQuery._id_finger_open,
                      caseQuery.name_finger_opening,
                      DEL_FLAG.VALID
                    )
                  : null,
                caseQuery._id_finger_shape
                  ? new FingerShape(
                      caseQuery._id_finger_shape,
                      caseQuery.finger_shape_name,
                      DEL_FLAG.VALID
                    )
                  : null,
                caseQuery._id_hand_movement
                  ? new HandMovement(
                      caseQuery._id_hand_movement,
                      caseQuery.hand_movement_name,
                      DEL_FLAG.VALID
                    )
                  : null,
                caseQuery._id_hand_shape
                  ? new HandShape(
                      caseQuery._id_hand_shape,
                      caseQuery.hand_shape_name,
                      DEL_FLAG.VALID
                    )
                  : null,
                DEL_FLAG.VALID
              )
            );
          }
        }
      );
    });
  }
}
