"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandMovement = void 0;
class HandMovement {
    // private value: number | string;
    constructor(idHandMovement, nameHandMovement, delFlag) {
        this.idHandMovement = idHandMovement;
        this.nameHandMovement = nameHandMovement;
        this.delFlag = delFlag;
        // this.value = value;
    }
    /**
     * Getter idHandMovement
     * @return {number }
     */
    getIdHandMovement() {
        return this.idHandMovement;
    }
    /**
     * Getter nameHandMovement
     * @return {string}
     */
    getNameHandMovement() {
        return this.nameHandMovement;
    }
    /**
     * Getter delFlag
     * @return {DEL_FLAG}
     */
    getDelFlag() {
        return this.delFlag;
    }
    /**
     * Getter value
     * @return {number }
     */
    // public getValue(): number | string {
    //   return this.value;
    // }
    /**
     * Setter idHandMovement
     * @param {number } value
     */
    setIdHandMovement(value) {
        this.idHandMovement = value;
    }
    /**
     * Setter nameHandMovement
     * @param {string} value
     */
    setNameHandMovement(value) {
        this.nameHandMovement = value;
    }
    /**
     * Setter delFlag
     * @param {DEL_FLAG} value
     */
    setDelFlag(value) {
        this.delFlag = value;
    }
}
exports.HandMovement = HandMovement;
