import { DEL_FLAG } from "../shared/constants";

export class HandMovement {
  private idHandMovement: number | string;
  private nameHandMovement: string;
  private delFlag: DEL_FLAG;
  // private value: number | string;

  constructor(
    idHandMovement: number | string,
    nameHandMovement: string,
    delFlag: DEL_FLAG,
    // value: number | string
  ) {
    this.idHandMovement = idHandMovement;
    this.nameHandMovement = nameHandMovement;
    this.delFlag = delFlag;
    // this.value = value;
  }

  /**
   * Getter idHandMovement
   * @return {number }
   */
  public getIdHandMovement(): number | string {
    return this.idHandMovement;
  }

  /**
   * Getter nameHandMovement
   * @return {string}
   */
  public getNameHandMovement(): string {
    return this.nameHandMovement;
  }

  /**
   * Getter delFlag
   * @return {DEL_FLAG}
   */
  public getDelFlag(): DEL_FLAG {
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
  public setIdHandMovement(value: number) {
    this.idHandMovement = value;
  }

  /**
   * Setter nameHandMovement
   * @param {string} value
   */
  public setNameHandMovement(value: string) {
    this.nameHandMovement = value;
  }

  /**
   * Setter delFlag
   * @param {DEL_FLAG} value
   */
  public setDelFlag(value: DEL_FLAG) {
    this.delFlag = value;
  }

  /**
   * Setter value
   * @param {number } value
   */
  // public setValue(value: number) {
  //   this.value = value;
  // }
}
