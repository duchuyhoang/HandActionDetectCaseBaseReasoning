import { DirectionOfPalmsAndFingerDao } from "../Dao/DirectionOfPalmsAndFingerDao";
import { FingerOpeningDao } from "../Dao/FingerOpeningDao";
import { FingerShapeDao } from "../Dao/FingerShapeDao";
import { HandMovementDao } from "../Dao/HandMovementDao";
import { HandShapeDao } from "../Dao/HandShapeDao";
import { NextFunction, Request, Response } from "express";
import { throwHttpError } from "../shared/functions";

export class ExpertiseDataController {
  private directionOfPalmsAndFingerDao: DirectionOfPalmsAndFingerDao;
  private fingerOpeningDao: FingerOpeningDao;
  private fingerShapeDao: FingerShapeDao;
  private handMovementDao: HandMovementDao;
  private handShapeDao: HandShapeDao;

  constructor() {
    this.directionOfPalmsAndFingerDao = new DirectionOfPalmsAndFingerDao();
    this.fingerOpeningDao = new FingerOpeningDao();
    this.fingerShapeDao = new FingerShapeDao();
    this.handMovementDao = new HandMovementDao();
    this.handShapeDao = new HandShapeDao();
    this.getAllDirectionOfPalmsAndFinger =
      this.getAllDirectionOfPalmsAndFinger.bind(this);
    this.getAllFingerOpening = this.getAllFingerOpening.bind(this);
    this.getAllHandMovement = this.getAllHandMovement.bind(this);
    this.getAllFingerShape = this.getAllFingerShape.bind(this);
    this.getAllHandShape = this.getAllHandShape.bind(this);
  }

  public async getAllDirectionOfPalmsAndFinger(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const listDirectionOfPalmsAndFinger =
        await this.directionOfPalmsAndFingerDao.getAll();
      res.json({ data: listDirectionOfPalmsAndFinger });
    } catch (err) {
      throwHttpError("Something wrong", 400, next);
    }
  }

  public async getAllFingerOpening(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const listfingerOpening = await this.fingerOpeningDao.getAll();
      res.json({ data: listfingerOpening });
    } catch (err) {
      throwHttpError("Something wrong", 400, next);
    }
  }

  public async getAllFingerShape(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const listFingerShape = await this.fingerShapeDao.getAll();
      res.json({ data: listFingerShape });
    } catch (err) {
      throwHttpError("Something wrong", 400, next);
    }
  }

  public async getAllHandMovement(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const listHandMovement = await this.handMovementDao.getAll();
      res.json({ data: listHandMovement });
    } catch (err) {
      throwHttpError("Something wrong", 400, next);
    }
  }

  public async getAllHandShape(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const listHandShape = await this.handShapeDao.getAll();
      res.json({ data: listHandShape });
    } catch (err) {
      throwHttpError("Something wrong", 400, next);
    }
  }
}
