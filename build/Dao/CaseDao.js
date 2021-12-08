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
exports.CaseDao = void 0;
const DBConnector_1 = require("../DBConnector");
const Case_1 = require("../Models/Case");
const HandShape_1 = require("../Models/HandShape");
const DirectionOfPalmsAndFinger_1 = require("../Models/DirectionOfPalmsAndFinger");
const FingerOpening_1 = require("../Models/FingerOpening");
const FingerShape_1 = require("../Models/FingerShape");
const HandMovement_1 = require("../Models/HandMovement");
const constants_1 = require("../shared/constants");
class CaseDao extends DBConnector_1.DBConnector {
    constructor() {
        super();
        // this.DBConnector=new DBConnector();
        // DBConnector.connectDb();
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield this.handleConnect();
            return new Promise((resolve, reject) => {
                connection.query(`SELECT hand_case.*,
    direction_of_palm_and_finger.id_direction_of_palm_and_finger,direction_of_palm_and_finger.direction_of_palm_and_finger_name,
    finger_opening.id_finger_opening,finger_opening.name_finger_opening,
    finger_shape.id_finger_shape,finger_shape.finger_shape_name,
    hand_movement.id_hand_movement,hand_movement.hand_movement_name,
    hand_shape.hand_shape_name,hand_shape.id_hand_shape
    FROM hand_case
    LEFT JOIN direction_of_palm_and_finger ON hand_case._id_direction_of_palm_and_finger=direction_of_palm_and_finger.id_direction_of_palm_and_finger AND direction_of_palm_and_finger.delFlag=${constants_1.DEL_FLAG.VALID}
    LEFT JOIN finger_opening ON hand_case._id_finger_open=finger_opening.id_finger_opening AND finger_opening.delFlag=${constants_1.DEL_FLAG.VALID}
    LEFT JOIN finger_shape ON hand_case._id_finger_shape=finger_shape.id_finger_shape AND finger_shape.delFlag=${constants_1.DEL_FLAG.VALID}
    LEFT JOIN hand_movement ON hand_case._id_hand_movement=hand_movement.id_hand_movement AND hand_movement.delFlag=${constants_1.DEL_FLAG.VALID}
    LEFT JOIN hand_shape ON hand_case._id_hand_shape=hand_shape.id_hand_shape AND hand_shape.delFlag=${constants_1.DEL_FLAG.VALID}
    WHERE hand_case.delFlag=${constants_1.DEL_FLAG.VALID};`, (err, results) => {
                    let listCase = [];
                    results.forEach((caseQuery) => listCase.push(new Case_1.Case(caseQuery.id_case, caseQuery.case_name_result, caseQuery._id_direction_of_palm_and_finger
                        ? new DirectionOfPalmsAndFinger_1.DirectionOfPalmsAndFinger(caseQuery._id_direction_of_palm_and_finger, caseQuery.direction_of_palm_and_finger_name, constants_1.DEL_FLAG.VALID)
                        : null, caseQuery._id_finger_open
                        ? new FingerOpening_1.FingerOpening(caseQuery._id_finger_open, caseQuery.name_finger_opening, constants_1.DEL_FLAG.VALID)
                        : null, caseQuery._id_finger_shape
                        ? new FingerShape_1.FingerShape(caseQuery._id_finger_shape, caseQuery.finger_shape_name, constants_1.DEL_FLAG.VALID)
                        : null, caseQuery._id_hand_movement
                        ? new HandMovement_1.HandMovement(caseQuery._id_hand_movement, caseQuery.hand_movement_name, constants_1.DEL_FLAG.VALID)
                        : null, caseQuery._id_hand_shape
                        ? new HandShape_1.HandShape(caseQuery._id_hand_shape, caseQuery.hand_shape_name, constants_1.DEL_FLAG.VALID)
                        : null, constants_1.DEL_FLAG.VALID)));
                    resolve(listCase);
                });
            });
        });
    }
    insertNewCase(newCase) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield this.handleConnect();
            return new Promise((resolve, reject) => {
                var _a, _b, _c, _d, _e;
                connection.query(`INSERT INTO hand_case(case_name_result,_id_direction_of_palm_and_finger,_id_finger_open,_id_finger_shape,_id_hand_movement,_id_hand_shape) VALUES(?,?,?,?,?,?)`, [
                    newCase.getCaseNameResult(),
                    ((_a = newCase
                        .get_directionOfPalmsAndFinger()) === null || _a === void 0 ? void 0 : _a.getIdDirectionOfPalmsAndFinger()) || null,
                    ((_b = newCase.get_fingerOpening()) === null || _b === void 0 ? void 0 : _b.getIdFingerOpening()) || null,
                    ((_c = newCase.get_fingerShape()) === null || _c === void 0 ? void 0 : _c.getIdFingerShape()) || null,
                    ((_d = newCase.get_handMovement()) === null || _d === void 0 ? void 0 : _d.getIdHandMovement()) || null,
                    ((_e = newCase.get_handShape()) === null || _e === void 0 ? void 0 : _e.getIdHandShape()) || null,
                ], (err, results) => {
                    if (err)
                        reject(err);
                    resolve(results);
                });
            });
        });
    }
    getCaseById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield this.handleConnect();
            return new Promise((resolve, reject) => {
                connection.query(`SELECT hand_case.*,
    direction_of_palm_and_finger.id_direction_of_palm_and_finger,direction_of_palm_and_finger.direction_of_palm_and_finger_name,
    finger_opening.id_finger_opening,finger_opening.name_finger_opening,
    finger_shape.id_finger_shape,finger_shape.finger_shape_name,
    hand_movement.id_hand_movement,hand_movement.hand_movement_name,
    hand_shape.hand_shape_name,hand_shape.id_hand_shape
    FROM hand_case
    LEFT JOIN direction_of_palm_and_finger ON hand_case._id_direction_of_palm_and_finger=direction_of_palm_and_finger.id_direction_of_palm_and_finger AND direction_of_palm_and_finger.delFlag=${constants_1.DEL_FLAG.VALID}
    LEFT JOIN finger_opening ON hand_case._id_finger_open=finger_opening.id_finger_opening AND finger_opening.delFlag=${constants_1.DEL_FLAG.VALID}
    LEFT JOIN finger_shape ON hand_case._id_finger_shape=finger_shape.id_finger_shape AND finger_shape.delFlag=${constants_1.DEL_FLAG.VALID}
    LEFT JOIN hand_movement ON hand_case._id_hand_movement=hand_movement.id_hand_movement AND hand_movement.delFlag=${constants_1.DEL_FLAG.VALID}
    LEFT JOIN hand_shape ON hand_case._id_hand_shape=hand_shape.id_hand_shape AND hand_shape.delFlag=${constants_1.DEL_FLAG.VALID}
    WHERE hand_case.delFlag=${constants_1.DEL_FLAG.VALID} AND hand_case.id_case=?;`, [id], (err, results) => {
                    if (err)
                        reject(err);
                    if (results.length === 0)
                        resolve(null);
                    else {
                        const caseQuery = results[0];
                        resolve(new Case_1.Case(caseQuery.id_case, caseQuery.case_name_result, caseQuery._id_direction_of_palm_and_finger
                            ? new DirectionOfPalmsAndFinger_1.DirectionOfPalmsAndFinger(caseQuery._id_direction_of_palm_and_finger, caseQuery.direction_of_palm_and_finger_name, constants_1.DEL_FLAG.VALID)
                            : null, caseQuery._id_finger_open
                            ? new FingerOpening_1.FingerOpening(caseQuery._id_finger_open, caseQuery.name_finger_opening, constants_1.DEL_FLAG.VALID)
                            : null, caseQuery._id_finger_shape
                            ? new FingerShape_1.FingerShape(caseQuery._id_finger_shape, caseQuery.finger_shape_name, constants_1.DEL_FLAG.VALID)
                            : null, caseQuery._id_hand_movement
                            ? new HandMovement_1.HandMovement(caseQuery._id_hand_movement, caseQuery.hand_movement_name, constants_1.DEL_FLAG.VALID)
                            : null, caseQuery._id_hand_shape
                            ? new HandShape_1.HandShape(caseQuery._id_hand_shape, caseQuery.hand_shape_name, constants_1.DEL_FLAG.VALID)
                            : null, constants_1.DEL_FLAG.VALID));
                    }
                });
            });
        });
    }
}
exports.CaseDao = CaseDao;
