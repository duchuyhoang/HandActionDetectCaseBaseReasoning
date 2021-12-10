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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = require("body-parser");
require("dotenv").config();
const cors_1 = __importDefault(require("cors"));
const expertiseDataRouter_1 = require("./Routers/expertiseDataRouter");
const handDetectRouter_1 = require("./Routers/handDetectRouter");
const HttpError_1 = require("./Models/HttpError");
const caseRouter_1 = require("./Routers/caseRouter");
const app = (0, express_1.default)();
// "http://localhost:3000",
// {
//   origin:["http://192.168.1.237:3000/"]
// }
app.use((0, cors_1.default)());
// const server: Server = http.createServer(app);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/handDetect", handDetectRouter_1.handDetectRouter);
app.use("/expertiseData", expertiseDataRouter_1.expertiseDataRouter);
app.use("/case", caseRouter_1.caseRouter);
app.use((err, req, res, next) => {
    if (err instanceof HttpError_1.HttpError) {
        res.status(err.status | 401).json({
            message: err.message,
        });
    }
    else {
        res.status(401).json({
            message: err.message || "Unexpected error",
        });
    }
});
app.listen(process.env.PORT || 3001, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`Server is listening on port ${process.env.PORT || 3001}`);
    // const dao: DirectionOfPalmsAndFingerDao = new DirectionOfPalmsAndFingerDao();
    // const dao: CaseDao = new CaseDao();
    // try {
    //   const rs = await dao.getAll();
    // } catch (e) {
    //   // console.log(e);
    // }
}));
