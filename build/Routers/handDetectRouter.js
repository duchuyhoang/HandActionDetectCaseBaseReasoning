"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handDetectRouter = void 0;
const express_1 = __importDefault(require("express"));
const HandDetectionController_1 = require("../Controller/HandDetectionController");
exports.handDetectRouter = express_1.default.Router();
exports.handDetectRouter.post("/detect", new HandDetectionController_1.HandDetectionController().detectHand);
