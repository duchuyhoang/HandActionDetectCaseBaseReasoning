import { NextFunction } from "express";
import { HttpError } from "../Models/HttpError";

export const sumEnum = (_enum: any) => {
  let count = 0;
  for (let item in _enum) {
    if (!isNaN(Number(item))) {
      count += parseInt(item);
    }
  }
  return count;
};

export const throwHttpError = (
  message: string,
  status: number,
  next: NextFunction
) => {
  next(new HttpError(message, status));
};
