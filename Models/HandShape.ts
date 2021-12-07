import { DEL_FLAG } from "../shared/constants";

export class HandShape {
  private idHandShape: number | string;
  private nameHandShape: string;
  private delFlag: DEL_FLAG;
  // private value: number | string;

  constructor(
    idHandShape: number | string,
    nameHandShape: string,
    delFlag: DEL_FLAG,
    // value: number | string
  ) {
    this.idHandShape = idHandShape;
    this.nameHandShape = nameHandShape;
    this.delFlag = delFlag;
    // this.value = value;
  }

  /**
   * Getter idHandShape
   * @return {number }
   */
  public getIdHandShape(): number | string {
    return this.idHandShape;
  }

  /**
   * Getter nameHandShape
   * @return {string}
   */
  public getNameHandShape(): string {
    return this.nameHandShape;
  }

  /**
   * Getter delFlag
   * @return {DEL_FLAG}
   */
  public getDelFlag(): DEL_FLAG {
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
  public setIdHandShape(value: number) {
    this.idHandShape = value;
  }

  /**
   * Setter nameHandShape
   * @param {string} value
   */
  public setNameHandShape(value: string) {
    this.nameHandShape = value;
  }

  /**
   * Setter delFlag
   * @param {DEL_FLAG} value
   */
  public setDelFlag(value: DEL_FLAG) {
    this.delFlag = value;
  }

  // /**
  //  * Setter value
  //  * @param {number } value
  //  */
  // public setValue(value: number) {
  //   this.value = value;
  // }
}
