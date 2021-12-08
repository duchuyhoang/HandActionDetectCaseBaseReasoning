"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightNumber = exports.DEL_FLAG = void 0;
var DEL_FLAG;
(function (DEL_FLAG) {
    DEL_FLAG[DEL_FLAG["VALID"] = 0] = "VALID";
    DEL_FLAG[DEL_FLAG["INVALID"] = 1] = "INVALID";
})(DEL_FLAG || (DEL_FLAG = {}));
exports.DEL_FLAG = DEL_FLAG;
var WeightNumber;
(function (WeightNumber) {
    WeightNumber[WeightNumber["HAND_SHAPE"] = 6] = "HAND_SHAPE";
    WeightNumber[WeightNumber["DIRECTION_OF_PALMS_AND_FINGER"] = 5] = "DIRECTION_OF_PALMS_AND_FINGER";
    WeightNumber[WeightNumber["FINGER_OPENING"] = 4] = "FINGER_OPENING";
    WeightNumber[WeightNumber["FINGER_SHAPE"] = 3] = "FINGER_SHAPE";
    WeightNumber[WeightNumber["HAND_MOVEMENT"] = 1] = "HAND_MOVEMENT";
})(WeightNumber || (WeightNumber = {}));
exports.WeightNumber = WeightNumber;
