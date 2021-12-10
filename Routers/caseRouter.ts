import express, { Express, Router, Request, Response } from "express";
import { CaseController } from "../Controller/CaseController";
export const caseRouter: Router = express.Router();

caseRouter.get("/getAll",new CaseController().getAll);
