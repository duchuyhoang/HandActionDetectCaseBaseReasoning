"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.caseRouter = void 0;
const express_1 = __importDefault(require("express"));
const CaseController_1 = require("../Controller/CaseController");
exports.caseRouter = express_1.default.Router();
exports.caseRouter.get("/getAll", new CaseController_1.CaseController().getAll);
