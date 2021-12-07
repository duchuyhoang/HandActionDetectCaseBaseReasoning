import { DEL_FLAG } from "../shared/constants";
import { Maybe } from "../shared";
import { DirectionOfPalmsAndFinger } from "./DirectionOfPalmsAndFinger";
import { FingerOpening } from "./FingerOpening";
import { FingerShape } from "./FingerShape";
import { HandMovement } from "./HandMovement";
import { HandShape } from "./HandShape";

export class Case {

    private idCase: string | number;
    private caseNameResult: string;
    private _directionOfPalmsAndFinger: Maybe<DirectionOfPalmsAndFinger>;
    private _fingerOpening: Maybe<FingerOpening>;
    private _fingerShape: Maybe<FingerShape>;
    private _handMovement: Maybe<HandMovement>;
    private _handShape: Maybe<HandShape>;
    private delFlag: DEL_FLAG;
  
    constructor(
      idCase: string | number,
      caseNameResult: string,
      directionOfPalmsAndFinger: Maybe<DirectionOfPalmsAndFinger>,
      _fingerOpening: Maybe<FingerOpening>,
      _fingerShape: Maybe<FingerShape>,
      _handMovement: Maybe<HandMovement>,
      _handShape: Maybe<HandShape>,
      delFlag: DEL_FLAG
    ) {
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
  public getIdCase(): string | number {
    return this.idCase;
  }

  /**
   * Getter caseNameResult
   * @return {string}
   */
  public getCaseNameResult(): string {
    return this.caseNameResult;
  }

  /**
   * Getter _directionOfPalmsAndFinger
   * @return {DirectionOfPalmsAndFinger}
   */
  public get_directionOfPalmsAndFinger(): Maybe<DirectionOfPalmsAndFinger> {
    return this._directionOfPalmsAndFinger;
  }

  /**
   * Getter _fingerOpening
   * @return {FingerOpening}
   */
  public get_fingerOpening(): Maybe<FingerOpening> {
    return this._fingerOpening;
  }

  /**
   * Getter _fingerShape
   * @return {FingerShape}
   */
  public get_fingerShape(): Maybe<FingerShape> {
    return this._fingerShape;
  }

  /**
   * Getter _handMovement
   * @return {HandMovement}
   */
  public get_handMovement(): Maybe<HandMovement> {
    return this._handMovement;
  }

  /**
   * Getter _handShape
   * @return {HandShape}
   */
  public get_handShape(): Maybe<HandShape> {
    return this._handShape;
  }

  /**
   * Getter delFlag
   * @return {DEL_FLAG}
   */
  public getDelFlag(): DEL_FLAG {
    return this.delFlag;
  }

  /**
   * Setter idCase
   * @param {string } value
   */
  public setIdCase(value: string) {
    this.idCase = value;
  }

  /**
   * Setter caseNameResult
   * @param {string} value
   */
  public setCaseNameResult(value: string) {
    this.caseNameResult = value;
  }

  public set_directionOfPalmsAndFinger(value: DirectionOfPalmsAndFinger) {
    this._directionOfPalmsAndFinger = value;
  }

  /**
   * Setter _fingerOpening
   * @param {FingerOpening} value
   */
  public set_fingerOpening(value: FingerOpening) {
    this._fingerOpening = value;
  }

  /**
   * Setter _fingerShape
   * @param {FingerShape} value
   */
  public set_fingerShape(value: FingerShape) {
    this._fingerShape = value;
  }

  /**
   * Setter _handMovement
   * @param {HandMovement} value
   */
  public set_handMovement(value: HandMovement) {
    this._handMovement = value;
  }

  /**
   * Setter _handShape
   * @param {HandShape} value
   */
  public set_handShape(value: HandShape) {
    this._handShape = value;
  }

  /**
   * Setter delFlag
   * @param {DEL_FLAG} value
   */
  public setDelFlag(value: DEL_FLAG) {
    this.delFlag = value;
  }

  
}
