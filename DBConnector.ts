import mysql, { Pool, Connection } from "mysql";

export class DBConnector {
  protected pool: Pool;
  protected static connection: Connection | undefined;
  protected static retryTime: number = 0;

  static poolConnectionConfig = {
    host: "171.241.79.35",
    // host:"localhost",
    connectionLimit: 1,
    user: "root",
    password: "huyhoang10032000@gmail.com",
    database: "hand_action_detect",
    port: 3306,
  };

  constructor() {
    this.pool = mysql.createPool({ ...DBConnector.poolConnectionConfig });
  }

  //   static async connectDb() {
  //     this.pool = mysql.createPool({
  //       host: "171.241.46.90",
  //       // host:"localhost",
  //       user: "root",
  //       password: "huyhoang10032000@gmail.com",
  //       database: "chat_app",
  //       port: 3306,
  //     });

  //     // this.handleConnect(this.pool);
  //   }

  public handleConnect() {
    // if (this.connection) return;
    return new Promise<Connection>((resolve, reject) => {
      console.log(DBConnector.connection?.escapeId);
      if (DBConnector.connection) resolve(DBConnector.connection);
      this.pool.getConnection(
        (err: mysql.MysqlError, connection: Connection) => {
          if (DBConnector.retryTime > 3) {
            // connection.end();
            reject("Db connect failed xxxx");
            return;
          }
          if (err) {
            // const { connectionConfig, ...rest } = pool.config;
            DBConnector.increaseRetryTime();
            this.pool = mysql.createPool({
              ...DBConnector.poolConnectionConfig,
            });
            this.handleConnect();
          } else {
            DBConnector.connection = connection;
            DBConnector.retryTime = 0;
            resolve(connection);
          }
        }
      );
    });
  }

  //   static getConnection() {
  //     return this.connection;
  //   }

  static increaseRetryTime() {
    DBConnector.retryTime = DBConnector.retryTime + 1;
  }
}
