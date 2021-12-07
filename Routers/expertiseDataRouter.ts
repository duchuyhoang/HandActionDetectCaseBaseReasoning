import express, { Express, Router, Request, Response } from "express";
import { ExpertiseDataController } from "../Controller/ExpertiseDataController";
export const expertiseDataRouter: Router = express.Router();

// expertiseDataRouter.get("/detect",new HandDetectionController().detectHand)

expertiseDataRouter.get(
  "/getAllDirectionOfPalmsAndFinger",
  new ExpertiseDataController().getAllDirectionOfPalmsAndFinger
);
expertiseDataRouter.get(
  "/getAllFingerOpening",
  new ExpertiseDataController().getAllFingerOpening
);
expertiseDataRouter.get(
  "/getAllFingerShape",
  new ExpertiseDataController().getAllFingerShape
);
expertiseDataRouter.get(
  "/getAllHandMovement",
  new ExpertiseDataController().getAllHandMovement
);
expertiseDataRouter.get(
  "/getAllHandShape",
  new ExpertiseDataController().getAllHandShape
);
