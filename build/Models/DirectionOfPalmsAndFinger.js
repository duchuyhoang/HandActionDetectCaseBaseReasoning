"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectionOfPalmsAndFinger = void 0;
class DirectionOfPalmsAndFinger {
    constructor(idDirectionOfPalmsAndFinger, directionOfPalmAndFingerName, delFlag) {
        this.idDirectionOfPalmsAndFinger = idDirectionOfPalmsAndFinger;
        this.directionOfPalmAndFingerName = directionOfPalmAndFingerName;
        this.delFlag = delFlag;
    }
    /**
     * Getter idDirectionOfPalmsAndFinger
     * @return {number }
     */
    getIdDirectionOfPalmsAndFinger() {
        return this.idDirectionOfPalmsAndFinger;
    }
    /**
     * Getter directionOfPalmAndFingerName
     * @return {string}
     */
    getDirectionOfPalmAndFingerName() {
        return this.directionOfPalmAndFingerName;
    }
    /**
     * Getter delFlag
     * @return {DEL_FLAG}
     */
    getDelFlag() {
        return this.delFlag;
    }
    setIdDirectionOfPalmsAndFinger(value) {
        this.idDirectionOfPalmsAndFinger = value;
    }
    /**
     * Setter directionOfPalmAndFingerName
     * @param {string} value
     */
    setDirectionOfPalmAndFingerName(value) {
        this.directionOfPalmAndFingerName = value;
    }
    /**
     * Setter delFlag
     * @param {DEL_FLAG} value
     */
    setDelFlag(value) {
        this.delFlag = value;
    }
}
exports.DirectionOfPalmsAndFinger = DirectionOfPalmsAndFinger;
