import { DBConnector } from "../DBConnector";
import { Connection, MysqlError } from "mysql";
import { DEL_FLAG } from "../shared/constants";
import { FingerShape } from "../Models/FingerShape";

export class FingerShapeDao extends DBConnector {
  constructor() {
    super();
  }

  public async getAll() {
    const connection = await this.handleConnect();
    return new Promise<Array<FingerShape>>((resolve, reject) => {
        if (connection) {
            connection.query(
              `SELECT * FROM finger_shape WHERE delFlag=${DEL_FLAG.VALID};`,
              (err: MysqlError | null, results: any) => {
                if (err) reject(err);
                else {
                  const listFingerShape: Array<FingerShape> = [];
                  results.forEach((query: any) => {
                    listFingerShape.push(
                      new FingerShape(
                        query.id_finger_shape,
                        query.finger_shape_name,
                        DEL_FLAG.VALID
                      )
                    );
                  });
                  resolve(listFingerShape);
                }
              }
              
            );
    
          } else {
            reject("Error with Db");
          }
    });
  }
}
