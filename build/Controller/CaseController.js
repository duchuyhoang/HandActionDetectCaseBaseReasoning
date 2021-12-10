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
exports.CaseController = void 0;
const CaseDao_1 = require("../Dao/CaseDao");
const functions_1 = require("../shared/functions");
class CaseController {
    constructor() {
        this.caseDao = new CaseDao_1.CaseDao();
        this.getAll = this.getAll.bind(this);
    }
    getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listCase = yield this.caseDao.getAll();
                res.json({ data: listCase });
            }
            catch (e) {
                (0, functions_1.throwHttpError)("Something wrong", 400, next);
            }
        });
    }
}
exports.CaseController = CaseController;
