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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLController = void 0;
const shortid_1 = __importDefault(require("shortid"));
const Constants_1 = require("../config/Constants");
const URL_1 = require("../database/model/URL");
class URLController {
    shortern(requ, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { origenURL } = requ.body;
            const url = yield URL_1.URLModel.findOne({ origenURL });
            if (url) {
                resp.json(url);
                return;
            }
            const hash = shortid_1.default.generate();
            const shortUrl = `${Constants_1.config.API_URL}/${hash}`;
            const newURL = yield URL_1.URLModel.create({ hash, shortUrl, origenURL });
            resp.json(newURL);
        });
    }
    redirect(requ, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const { hash } = requ.params;
            const url = yield URL_1.URLModel.findOne({ hash });
            if (url) {
                resp.redirect(url.origenURL);
                return;
            }
            resp.status(400).json({ error: 'URL not found' });
        });
    }
}
exports.URLController = URLController;
//# sourceMappingURL=UrlController.js.map