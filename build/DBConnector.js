"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBConnector = void 0;
const mysql_1 = __importDefault(require("mysql"));
class DBConnector {
    constructor() {
        this.pool = mysql_1.default.createPool(Object.assign({}, DBConnector.poolConnectionConfig));
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
    handleConnect() {
        // if (this.connection) return;
        return new Promise((resolve, reject) => {
            var _a;
            console.log((_a = DBConnector.connection) === null || _a === void 0 ? void 0 : _a.escapeId);
            if (DBConnector.connection)
                resolve(DBConnector.connection);
            this.pool.getConnection((err, connection) => {
                if (DBConnector.retryTime > 3) {
                    // connection.end();
                    reject("Db connect failed xxxx");
                    return;
                }
                if (err) {
                    // const { connectionConfig, ...rest } = pool.config;
                    DBConnector.increaseRetryTime();
                    this.pool = mysql_1.default.createPool(Object.assign({}, DBConnector.poolConnectionConfig));
                    this.handleConnect();
                }
                else {
                    DBConnector.connection = connection;
                    DBConnector.retryTime = 0;
                    resolve(connection);
                }
            });
        });
    }
    //   static getConnection() {
    //     return this.connection;
    //   }
    static increaseRetryTime() {
        DBConnector.retryTime = DBConnector.retryTime + 1;
    }
}
exports.DBConnector = DBConnector;
DBConnector.retryTime = 0;
DBConnector.poolConnectionConfig = {
    host: "171.241.13.232",
    // host:"localhost",
    connectionLimit: 1,
    user: "root",
    password: "huyhoang10032000@gmail.com",
    database: "hand_action_detect",
    port: 3306,
};
