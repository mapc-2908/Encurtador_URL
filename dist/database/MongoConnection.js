"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoConnection = void 0;
const Constants_1 = require("../config/Constants");
class MongoConnection {
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { MongoClient } = require("mongodb");
                const uri = Constants_1.config.MONGODB_URL + Constants_1.config.MONGODB_USERNOME + ':'
                    + Constants_1.config.MONGODB_USERSENHA + Constants_1.config.MONGODB_HOST + 'test?retryWrites=true&w=majority';
                const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
                yield client.connect();
                console.log('Database connected');
            }
            catch (err) {
                console.error(err.message);
                process.exit(1);
            }
        });
    }
}
exports.MongoConnection = MongoConnection;
//# sourceMappingURL=MongoConnection.js.map