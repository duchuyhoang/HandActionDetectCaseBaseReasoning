import { Connection, MysqlError } from "mysql";
import { DBConnector } from "../DBConnector";
import { HandShape } from "../Models/HandShape";
import { DEL_FLAG } from "../shared/constants";


export class HandShapeDao extends DBConnector{
    constructor() {
        super();
      }
    
      public async getAll() {
        const connection = await this.handleConnect();
        return new Promise<Array<HandShape>>((resolve, reject) => {
            if (connection) {
                connection.query(
                  `SELECT * FROM hand_shape WHERE delFlag=${DEL_FLAG.VALID};`,
                  (err: MysqlError | null, results: any) => {
                    if (err) reject(err);
                    else {
                      const listFingerOpening: Array<HandShape> = [];
                      results.forEach((query: any) => {
                        listFingerOpening.push(
                          new HandShape(
                            query.id_hand_shape,
                            query.hand_shape_name,
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
        })
    }
}