import { Connection, MysqlError } from "mysql";
import { DBConnector } from "../DBConnector";
import { FingerOpening } from "../Models/FingerOpening";
import { DEL_FLAG } from "../shared/constants";

export class FingerOpeningDao extends DBConnector {
  constructor() {
    super();
  }

  public async getAll() {
    const connection = await this.handleConnect();
    return new Promise<Array<FingerOpening>>((resolve, reject) => {
      if (connection) {
        connection.query(
          `SELECT * FROM finger_opening WHERE delFlag=${DEL_FLAG.VALID};`,
          (err: MysqlError | null, results: any) => {
            if (err) reject(err);
            else {
              const listFingerOpening: Array<FingerOpening> = [];
              results.forEach((query: any) => {
                listFingerOpening.push(
                  new FingerOpening(
                    query.id_finger_opening,
                    query.name_finger_opening,
                    DEL_FLAG.VALID
                  )
                );
              });
              resolve(listFingerOpening);
            }
          }
          
        );

      } else {
        reject("Error with Db");
      }
    });
  }
}
