"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandShape = void 0;
class HandShape {
    // private value: number | string;
    constructor(idHandShape, nameHandShape, delFlag) {
        this.idHandShape = idHandShape;
        this.nameHandShape = nameHandShape;
        this.delFlag = delFlag;
        // this.value = value;
    }
    /**
     * Getter idHandShape
     * @return {number }
     */
    getIdHandShape() {
        return this.idHandShape;
    }
    /**
     * Getter nameHandShape
     * @return {string}
     */
    getNameHandShape() {
        return this.nameHandShape;
    }
    /**
     * Getter delFlag
     * @return {DEL_FLAG}
     */
    getDelFlag() {
        return this.delFlag;
    }
    // /**
    //  * Getter value
    //  * @return {number }
    //  */
    // public getValue(): number | string {
    //   return this.value;
    // }
    // /**
    //  * Setter idHandShape
    //  * @param {number } value
    //  */
    setIdHandShape(value) {
        this.idHandShape = value;
    }
    /**
     * Setter nameHandShape
     * @param {string} value
     */
    setNameHandShape(value) {
        this.nameHandShape = value;
    }
    /**
     * Setter delFlag
     * @param {DEL_FLAG} value
     */
    setDelFlag(value) {
        this.delFlag = value;
    }
}
exports.HandShape = HandShape;
