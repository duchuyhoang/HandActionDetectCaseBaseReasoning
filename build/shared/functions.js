"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throwHttpError = exports.sumEnum = void 0;
const HttpError_1 = require("../Models/HttpError");
const sumEnum = (_enum) => {
    let count = 0;
    for (let item in _enum) {
        if (!isNaN(Number(item))) {
            count += parseInt(item);
        }
    }
    return count;
};
exports.sumEnum = sumEnum;
const throwHttpError = (message, status, next) => {
    next(new HttpError_1.HttpError(message, status));
};
exports.throwHttpError = throwHttpError;
