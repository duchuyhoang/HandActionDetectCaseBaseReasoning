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
exports.ExpertiseDataController = void 0;
const DirectionOfPalmsAndFingerDao_1 = require("../Dao/DirectionOfPalmsAndFingerDao");
const FingerOpeningDao_1 = require("../Dao/FingerOpeningDao");
const FingerShapeDao_1 = require("../Dao/FingerShapeDao");
const HandMovementDao_1 = require("../Dao/HandMovementDao");
const HandShapeDao_1 = require("../Dao/HandShapeDao");
const functions_1 = require("../shared/functions");
class ExpertiseDataController {
    constructor() {
        this.directionOfPalmsAndFingerDao = new DirectionOfPalmsAndFingerDao_1.DirectionOfPalmsAndFingerDao();
        this.fingerOpeningDao = new FingerOpeningDao_1.FingerOpeningDao();
        this.fingerShapeDao = new FingerShapeDao_1.FingerShapeDao();
        this.handMovementDao = new HandMovementDao_1.HandMovementDao();
        this.handShapeDao = new HandShapeDao_1.HandShapeDao();
        this.getAllDirectionOfPalmsAndFinger =
            this.getAllDirectionOfPalmsAndFinger.bind(this);
        this.getAllFingerOpening = this.getAllFingerOpening.bind(this);
        this.getAllHandMovement = this.getAllHandMovement.bind(this);
        this.getAllFingerShape = this.getAllFingerShape.bind(this);
        this.getAllHandShape = this.getAllHandShape.bind(this);
    }
    getAllDirectionOfPalmsAndFinger(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listDirectionOfPalmsAndFinger = yield this.directionOfPalmsAndFingerDao.getAll();
                res.json({ data: listDirectionOfPalmsAndFinger });
            }
            catch (err) {
                (0, functions_1.throwHttpError)("Something wrong", 400, next);
            }
        });
    }
    getAllFingerOpening(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listfingerOpening = yield this.fingerOpeningDao.getAll();
                res.json({ data: listfingerOpening });
            }
            catch (err) {
                (0, functions_1.throwHttpError)("Something wrong", 400, next);
            }
        });
    }
    getAllFingerShape(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listFingerShape = yield this.fingerShapeDao.getAll();
                res.json({ data: listFingerShape });
            }
            catch (err) {
                (0, functions_1.throwHttpError)("Something wrong", 400, next);
            }
        });
    }
    getAllHandMovement(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listHandMovement = yield this.handMovementDao.getAll();
                res.json({ data: listHandMovement });
            }
            catch (err) {
                (0, functions_1.throwHttpError)("Something wrong", 400, next);
            }
        });
    }
    getAllHandShape(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const listHandShape = yield this.handShapeDao.getAll();
                res.json({ data: listHandShape });
            }
            catch (err) {
                (0, functions_1.throwHttpError)("Something wrong", 400, next);
            }
        });
    }
}
exports.ExpertiseDataController = ExpertiseDataController;
