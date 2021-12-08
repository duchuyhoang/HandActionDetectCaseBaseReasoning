"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Case = void 0;
class Case {
    constructor(idCase, caseNameResult, directionOfPalmsAndFinger, _fingerOpening, _fingerShape, _handMovement, _handShape, delFlag) {
        this.idCase = idCase;
        this.caseNameResult = caseNameResult;
        this._directionOfPalmsAndFinger = directionOfPalmsAndFinger;
        this._fingerOpening = _fingerOpening;
        this._fingerShape = _fingerShape;
        this._handMovement = _handMovement;
        this._handShape = _handShape;
        this.delFlag = delFlag;
    }
    /**
     * Getter idCase
     * @return {string }
     */
    getIdCase() {
        return this.idCase;
    }
    /**
     * Getter caseNameResult
     * @return {string}
     */
    getCaseNameResult() {
        return this.caseNameResult;
    }
    /**
     * Getter _directionOfPalmsAndFinger
     * @return {DirectionOfPalmsAndFinger}
     */
    get_directionOfPalmsAndFinger() {
        return this._directionOfPalmsAndFinger;
    }
    /**
     * Getter _fingerOpening
     * @return {FingerOpening}
     */
    get_fingerOpening() {
        return this._fingerOpening;
    }
    /**
     * Getter _fingerShape
     * @return {FingerShape}
     */
    get_fingerShape() {
        return this._fingerShape;
    }
    /**
     * Getter _handMovement
     * @return {HandMovement}
     */
    get_handMovement() {
        return this._handMovement;
    }
    /**
     * Getter _handShape
     * @return {HandShape}
     */
    get_handShape() {
        return this._handShape;
    }
    /**
     * Getter delFlag
     * @return {DEL_FLAG}
     */
    getDelFlag() {
        return this.delFlag;
    }
    /**
     * Setter idCase
     * @param {string } value
     */
    setIdCase(value) {
        this.idCase = value;
    }
    /**
     * Setter caseNameResult
     * @param {string} value
     */
    setCaseNameResult(value) {
        this.caseNameResult = value;
    }
    set_directionOfPalmsAndFinger(value) {
        this._directionOfPalmsAndFinger = value;
    }
    /**
     * Setter _fingerOpening
     * @param {FingerOpening} value
     */
    set_fingerOpening(value) {
        this._fingerOpening = value;
    }
    /**
     * Setter _fingerShape
     * @param {FingerShape} value
     */
    set_fingerShape(value) {
        this._fingerShape = value;
    }
    /**
     * Setter _handMovement
     * @param {HandMovement} value
     */
    set_handMovement(value) {
        this._handMovement = value;
    }
    /**
     * Setter _handShape
     * @param {HandShape} value
     */
    set_handShape(value) {
        this._handShape = value;
    }
    /**
     * Setter delFlag
     * @param {DEL_FLAG} value
     */
    setDelFlag(value) {
        this.delFlag = value;
    }
}
exports.Case = Case;
