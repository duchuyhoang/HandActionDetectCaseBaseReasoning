"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FingerOpening = void 0;
class FingerOpening {
    constructor(idFingerOpening, nameFingerOpening, delFlag) {
        this.idFingerOpening = idFingerOpening;
        this.nameFingerOpening = nameFingerOpening;
        this.delFlag = delFlag;
    }
    /**
     * Getter delFlag
     * @return {DEL_FLAG}
     */
    getDelFlag() {
        return this.delFlag;
    }
    setDelFlag(value) {
        this.delFlag = value;
    }
    /**
     * Getter idFingerOpening
     * @return {number }
     */
    getIdFingerOpening() {
        return this.idFingerOpening;
    }
    /**
     * Getter nameFingerOpening
     * @return {string}
     */
    getNameFingerOpening() {
        return this.nameFingerOpening;
    }
    /**
     * Setter idFingerOpening
     * @param {number } value
     */
    setIdFingerOpening(value) {
        this.idFingerOpening = value;
    }
    /**
     * Setter nameFingerOpening
     * @param {string} value
     */
    setNameFingerOpening(value) {
        this.nameFingerOpening = value;
    }
}
exports.FingerOpening = FingerOpening;
