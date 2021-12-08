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
exports.DirectionOfPalmsAndFingerDao = void 0;
const DBConnector_1 = require("../DBConnector");
const DirectionOfPalmsAndFinger_1 = require("../Models/DirectionOfPalmsAndFinger");
const constants_1 = require("../shared/constants");
class DirectionOfPalmsAndFingerDao extends DBConnector_1.DBConnector {
    constructor() {
        super();
        // this.DBConnector=new DBConnector();
        // DBConnector.connectDb();
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield this.handleConnect();
            return new Promise((resolve, reject) => {
                if (connection) {
                    connection.query(`SELECT * FROM direction_of_palm_and_finger WHERE delFlag=${constants_1.DEL_FLAG.VALID};`, (err, results) => {
                        if (err)
                            reject(err);
                        else {
                            const listDirectionOfPalmsAndFinger = [];
                            results.forEach((query) => {
                                listDirectionOfPalmsAndFinger.push(new DirectionOfPalmsAndFinger_1.DirectionOfPalmsAndFinger(query.id_direction_of_palm_and_finger, query.direction_of_palm_and_finger_name, constants_1.DEL_FLAG.VALID));
                            });
                            resolve(listDirectionOfPalmsAndFinger);
                        }
                    });
                }
                else {
                    reject("Error with Db");
                    // resolve(0);
                    // console.log("hala");
                }
            });
        });
    }
}
exports.DirectionOfPalmsAndFingerDao = DirectionOfPalmsAndFingerDao;
