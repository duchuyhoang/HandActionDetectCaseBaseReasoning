import { DEL_FLAG } from "../shared/constants";

export class DirectionOfPalmsAndFinger {

    private idDirectionOfPalmsAndFinger: number | string;
    private directionOfPalmAndFingerName: string;
    private delFlag: DEL_FLAG;
    constructor(
      idDirectionOfPalmsAndFinger: number | string,
      directionOfPalmAndFingerName: string,
      delFlag: DEL_FLAG,
    ) {
      this.idDirectionOfPalmsAndFinger = idDirectionOfPalmsAndFinger;
      this.directionOfPalmAndFingerName = directionOfPalmAndFingerName;
      this.delFlag = delFlag;
    }




    /**
     * Getter idDirectionOfPalmsAndFinger
     * @return {number }
     */
	public getIdDirectionOfPalmsAndFinger(): number|string  {
		return this.idDirectionOfPalmsAndFinger;
	}

    /**
     * Getter directionOfPalmAndFingerName
     * @return {string}
     */
	public getDirectionOfPalmAndFingerName(): string {
		return this.directionOfPalmAndFingerName;
	}

    /**
     * Getter delFlag
     * @return {DEL_FLAG}
     */
	public getDelFlag(): DEL_FLAG {
		return this.delFlag;
	}
	public setIdDirectionOfPalmsAndFinger(value: number ) {
		this.idDirectionOfPalmsAndFinger = value;
	}

    /**
     * Setter directionOfPalmAndFingerName
     * @param {string} value
     */
	public setDirectionOfPalmAndFingerName(value: string) {
		this.directionOfPalmAndFingerName = value;
	}

    /**
     * Setter delFlag
     * @param {DEL_FLAG} value
     */
	public setDelFlag(value: DEL_FLAG) {
		this.delFlag = value;
	}

}
