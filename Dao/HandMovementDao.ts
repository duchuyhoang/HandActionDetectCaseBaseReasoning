import { DBConnector } from "../DBConnector";
import { Connection, MysqlError } from "mysql";
import { DEL_FLAG } from "../shared/constants";
import { HandMovement } from "../Models/HandMovement";

export class HandMovementDao extends DBConnector {
  constructor() {
    super();
  }

public async getAll(){
    const connection = await this.handleConnect();
    return new Promise<Array<HandMovement>>((resolve, reject) => {
        if (connection) {
            connection.query(
              `SELECT * FROM hand_movement WHERE delFlag=${DEL_FLAG.VALID};`,
              (err: MysqlError | null, results: any) => {
                if (err) reject(err);
                else {
                  const listHandMovement: Array<HandMovement> = [];
                  results.forEach((query: any) => {
                    listHandMovement.push(
                      new HandMovement(
                        query.id_hand_movement,
                        query.hand_movement_name,
                        DEL_FLAG.VALID
                      )
                    );
                  });
                  resolve(listHandMovement);
                }
              }
              
            );
    
          } else {
            reject("Error with Db");
          }
    });
}




}