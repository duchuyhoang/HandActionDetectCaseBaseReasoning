import express, { Express, Router, Request, Response } from "express";
import {HandDetectionController} from "../Controller/HandDetectionController";
export const handDetectRouter: Router = express.Router();

handDetectRouter.post("/detect",new HandDetectionController().detectHand)

