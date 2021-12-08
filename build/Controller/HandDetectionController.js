"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandDetectionController = void 0;
const CaseDao_1 = require("../Dao/CaseDao");
const constants_1 = require("../shared/constants");
const Case_1 = require("../Models/Case");
const functions_1 = require("../shared/functions");
const HandShape_1 = require("../Models/HandShape");
const DirectionOfPalmsAndFinger_1 = require("../Models/DirectionOfPalmsAndFinger");
const FingerOpening_1 = require("../Models/FingerOpening");
const FingerShape_1 = require("../Models/FingerShape");
const HandMovement_1 = require("../Models/HandMovement");
class HandDetectionController {
    constructor() {
        this.caseDao = new CaseDao_1.CaseDao();
        // console.log("a",this.caseDao);
        this.detectHand = this.detectHand.bind(this);
    }
    detectHand(req, res, next) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function* () {
            const { directionOfPalmAndFinger, fingerOpening, fingerShape, handMovement, handShape, } = req.body;
            try {
                const listCase = yield this.caseDao.getAll();
                const arrValue = [];
                let maxCase = {
                    weightedValue: 0,
                    case: null,
                };
                for (let index = 0; index < listCase.length; index++) {
                    let _case = listCase[index];
                    let sumWeightedValue = (0, functions_1.sumEnum)(constants_1.WeightNumber);
                    let computedValue = (constants_1.WeightNumber.HAND_SHAPE *
                        (((_a = _case.get_handShape()) === null || _a === void 0 ? void 0 : _a.getIdHandShape().toString()) === handShape
                            ? 1
                            : 0) +
                        constants_1.WeightNumber.DIRECTION_OF_PALMS_AND_FINGER *
                            (((_b = _case
                                .get_directionOfPalmsAndFinger()) === null || _b === void 0 ? void 0 : _b.getIdDirectionOfPalmsAndFinger().toString()) === directionOfPalmAndFinger
                                ? 1
                                : 0) +
                        constants_1.WeightNumber.FINGER_OPENING *
                            (((_c = _case.get_fingerOpening()) === null || _c === void 0 ? void 0 : _c.getIdFingerOpening().toString()) ===
                                fingerOpening
                                ? 1
                                : 0) +
                        constants_1.WeightNumber.FINGER_SHAPE *
                            (((_d = _case.get_fingerShape()) === null || _d === void 0 ? void 0 : _d.getIdFingerShape().toString()) ===
                                fingerShape
                                ? 1
                                : 0) +
                        constants_1.WeightNumber.HAND_MOVEMENT *
                            (((_e = _case.get_handMovement()) === null || _e === void 0 ? void 0 : _e.getIdHandMovement().toString()) ===
                                handMovement
                                ? 1
                                : 0)) /
                        sumWeightedValue;
                    arrValue.push(computedValue);
                    if (computedValue > maxCase.weightedValue)
                        maxCase = {
                            weightedValue: computedValue,
                            case: listCase[index],
                        };
                    if (computedValue === 1)
                        break;
                }
                if (maxCase.weightedValue !== 1 && maxCase.case) {
                    const result = yield this.caseDao.insertNewCase(new Case_1.Case("", maxCase.case.getCaseNameResult(), new DirectionOfPalmsAndFinger_1.DirectionOfPalmsAndFinger(directionOfPalmAndFinger, "", constants_1.DEL_FLAG.VALID), new FingerOpening_1.FingerOpening(fingerOpening, "", constants_1.DEL_FLAG.VALID), new FingerShape_1.FingerShape(fingerShape, "", constants_1.DEL_FLAG.VALID), new HandMovement_1.HandMovement(handMovement, "", constants_1.DEL_FLAG.VALID), new HandShape_1.HandShape(handShape, "", constants_1.DEL_FLAG.VALID), constants_1.DEL_FLAG.VALID));
                    const newCase = yield this.caseDao.getCaseById(result.insertId);
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
            }
            catch (e) {
                console.log(e);
                (0, functions_1.throwHttpError)("Something wrong", 400, next);
            }
        });
    }
}
exports.HandDetectionController = HandDetectionController;
