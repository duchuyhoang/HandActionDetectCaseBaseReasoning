import { CaseDao } from "../Dao/CaseDao";
import { NextFunction, Request, Response } from "express";
import { Case } from "../Models/Case";
import { throwHttpError } from "../shared/functions";

export class CaseController {
  private caseDao: CaseDao;
  constructor() {
    this.caseDao = new CaseDao();
    this.getAll = this.getAll.bind(this);
  }

  public async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const listCase: Array<Case> = await this.caseDao.getAll();
      res.json({ data: listCase });
    } catch (e) {
        throwHttpError("Something wrong", 400, next);
    }
  }
}
