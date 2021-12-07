import { DEL_FLAG } from "../shared/constants";

export class FingerShape {
  private idFingerShape: number | string;
  private nameFingerShape: string;
  private delFlag: DEL_FLAG;
  // private value: number | string;
  constructor(
    idFingerShape: number | string,
    nameFingerShape: string,
    delFlag: DEL_FLAG,
    // value: number | string
  ) {
    this.idFingerShape = idFingerShape;
    this.nameFingerShape = nameFingerShape;
    this.delFlag = delFlag;
    // this.value = value;
  }

  /**
   * Getter idFingerShape
   * @return {number }
   */
  public getIdFingerShape(): number | string {
    return this.idFingerShape;
  }

  /**
   * Getter nameFingerShape
   * @return {string}
   */
  public getNameFingerShape(): string {
    return this.nameFingerShape;
  }

  /**
   * Getter delFlag
   * @return {DEL_FLAG}
   */
  public getDelFlag(): DEL_FLAG {
    return this.delFlag;
  }

  public setIdFingerShape(value: number) {
    this.idFingerShape = value;
  }

  /**
   * Setter nameFingerShape
   * @param {string} value
   */
  public setNameFingerShape(value: string) {
    this.nameFingerShape = value;
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
