import { Connection, MysqlError } from "mysql";
import { DBConnector } from "../DBConnector";
import { DirectionOfPalmsAndFinger } from "../Models/DirectionOfPalmsAndFinger";
import { DEL_FLAG } from "../shared/constants";
export class DirectionOfPalmsAndFingerDao extends DBConnector {
  constructor() {
    super();
    // this.DBConnector=new DBConnector();
    // DBConnector.connectDb();
  }

  public async getAll() {
    const connection = await this.handleConnect();
    return new Promise<Array<DirectionOfPalmsAndFinger>>((resolve, reject) => {
      if (connection) {
        connection.query(
          `SELECT * FROM direction_of_palm_and_finger WHERE delFlag=${DEL_FLAG.VALID};`,
          (err: MysqlError | null, results: any) => {
            if (err) reject(err);
            else {
              const listDirectionOfPalmsAndFinger:Array<DirectionOfPalmsAndFinger>=[];
              results.forEach((query:any)=>{
                listDirectionOfPalmsAndFinger.push(
                  new DirectionOfPalmsAndFinger(query.id_direction_of_palm_and_finger,query.direction_of_palm_and_finger_name,DEL_FLAG.VALID)
                  )
              })
            resolve(listDirectionOfPalmsAndFinger);
            }
          }
        );
      } else {
        reject("Error with Db");
        // resolve(0);
        // console.log("hala");
      }
    });
  }
}
