"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expertiseDataRouter = void 0;
const express_1 = __importDefault(require("express"));
const ExpertiseDataController_1 = require("../Controller/ExpertiseDataController");
exports.expertiseDataRouter = express_1.default.Router();
// expertiseDataRouter.get("/detect",new HandDetectionController().detectHand)
exports.expertiseDataRouter.get("/getAllDirectionOfPalmsAndFinger", new ExpertiseDataController_1.ExpertiseDataController().getAllDirectionOfPalmsAndFinger);
exports.expertiseDataRouter.get("/getAllFingerOpening", new ExpertiseDataController_1.ExpertiseDataController().getAllFingerOpening);
exports.expertiseDataRouter.get("/getAllFingerShape", new ExpertiseDataController_1.ExpertiseDataController().getAllFingerShape);
exports.expertiseDataRouter.get("/getAllHandMovement", new ExpertiseDataController_1.ExpertiseDataController().getAllHandMovement);
exports.expertiseDataRouter.get("/getAllHandShape", new ExpertiseDataController_1.ExpertiseDataController().getAllHandShape);
