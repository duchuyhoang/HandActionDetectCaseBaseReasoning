import { DEL_FLAG } from "../shared/constants";

export class FingerOpening {
  private idFingerOpening: number | string;
  private nameFingerOpening: string;
  private delFlag: DEL_FLAG;
    /**
     * Getter delFlag
     * @return {DEL_FLAG}
     */
	public getDelFlag(): DEL_FLAG {
		return this.delFlag;
	}

	public setDelFlag(value: DEL_FLAG) {
		this.delFlag = value;
	}
  constructor(
    idFingerOpening: number | string,
    nameFingerOpening: string,
    delFlag: DEL_FLAG,
  ) {
    this.idFingerOpening = idFingerOpening;
    this.nameFingerOpening = nameFingerOpening;
    this.delFlag = delFlag;
  }

  /**
   * Getter idFingerOpening
   * @return {number }
   */
  public getIdFingerOpening(): number | string {
    return this.idFingerOpening;
  }

  /**
   * Getter nameFingerOpening
   * @return {string}
   */
  public getNameFingerOpening(): string {
    return this.nameFingerOpening;
  }

  /**
   * Setter idFingerOpening
   * @param {number } value
   */
  public setIdFingerOpening(value: number) {
    this.idFingerOpening = value;
  }

  /**
   * Setter nameFingerOpening
   * @param {string} value
   */
  public setNameFingerOpening(value: string) {
    this.nameFingerOpening = value;
  }
}
