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
exports.HandMovementDao = void 0;
const DBConnector_1 = require("../DBConnector");
const constants_1 = require("../shared/constants");
const HandMovement_1 = require("../Models/HandMovement");
class HandMovementDao extends DBConnector_1.DBConnector {
    constructor() {
        super();
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield this.handleConnect();
            return new Promise((resolve, reject) => {
                if (connection) {
                    connection.query(`SELECT * FROM hand_movement WHERE delFlag=${constants_1.DEL_FLAG.VALID};`, (err, results) => {
                        if (err)
                            reject(err);
                        else {
                            const listHandMovement = [];
                            results.forEach((query) => {
                                listHandMovement.push(new HandMovement_1.HandMovement(query.id_hand_movement, query.hand_movement_name, constants_1.DEL_FLAG.VALID));
                            });
                            resolve(listHandMovement);
                        }
                    });
                }
                else {
                    reject("Error with Db");
                }
            });
        });
    }
}
exports.HandMovementDao = HandMovementDao;
