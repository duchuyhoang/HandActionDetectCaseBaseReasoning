"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FingerShape = void 0;
class FingerShape {
    // private value: number | string;
    constructor(idFingerShape, nameFingerShape, delFlag) {
        this.idFingerShape = idFingerShape;
        this.nameFingerShape = nameFingerShape;
        this.delFlag = delFlag;
        // this.value = value;
    }
    /**
     * Getter idFingerShape
     * @return {number }
     */
    getIdFingerShape() {
        return this.idFingerShape;
    }
    /**
     * Getter nameFingerShape
     * @return {string}
     */
    getNameFingerShape() {
        return this.nameFingerShape;
    }
    /**
     * Getter delFlag
     * @return {DEL_FLAG}
     */
    getDelFlag() {
        return this.delFlag;
    }
    setIdFingerShape(value) {
        this.idFingerShape = value;
    }
    /**
     * Setter nameFingerShape
     * @param {string} value
     */
    setNameFingerShape(value) {
        this.nameFingerShape = value;
    }
    /**
     * Setter delFlag
     * @param {DEL_FLAG} value
     */
    setDelFlag(value) {
        this.delFlag = value;
    }
}
exports.FingerShape = FingerShape;
