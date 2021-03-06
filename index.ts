import express, { Express, NextFunction, Request, Response } from "express";
import { DirectionOfPalmsAndFingerDao } from "./Dao/DirectionOfPalmsAndFingerDao";
import { CaseDao } from "./Dao/CaseDao";

const bodyParser = require("body-parser");
import http, { Server, IncomingHttpHeaders } from "http";
require("dotenv").config();
import { DEL_FLAG } from "./shared/constants";
import { HandDetectionController } from "./Controller/HandDetectionController";
import cors from "cors";

import { expertiseDataRouter } from "./Routers/expertiseDataRouter";
import { handDetectRouter } from "./Routers/handDetectRouter";
import { HttpError } from "./Models/HttpError";
import { caseRouter } from "./Routers/caseRouter";
import { DBConnector } from "./DBConnector";

const app: Express = express();
// "http://localhost:3000",
// {
//   origin:["http://192.168.1.237:3000/"]
// }
app.use(cors());

// const server: Server = http.createServer(app);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/handDetect", handDetectRouter);
app.use("/expertiseData", expertiseDataRouter);
app.use("/case", caseRouter);
app.use(
  (err: Error | HttpError, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof HttpError) {
      res.status(err.status | 401).json({
        message: err.message,
      });
    } else {
      res.status(401).json({
        message: err.message || "Unexpected error",
      });
    }
  }
);

app.listen(process.env.PORT || 3001, async () => {
  const connection = new DBConnector();
  await connection.handleConnect();
  console.log(`Server is listening on port ${process.env.PORT || 3001}`);

  // const dao: DirectionOfPalmsAndFingerDao = new DirectionOfPalmsAndFingerDao();
  // const dao: CaseDao = new CaseDao();
  // try {
  //   const rs = await dao.getAll();
  // } catch (e) {
  //   // console.log(e);
  // }
});
