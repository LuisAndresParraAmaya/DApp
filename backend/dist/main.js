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
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
//import { getMessengerContract } from './constracts/messenger.contract';
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
let message = 'Welcome to the Web3 🚀';
app.options('*', (0, cors_1.default)());
app.all('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
});
app.get('/messenger', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({
        message
    });
}));
// app.get('/messenger', async (req: Request, res: Response) => {
//   const contract = getMessengerContract();
//   const response = await contract.getMessage();
//   res.json({
//     message: response
//   });
// });
// app.put('/messenger', async (req: Request, res: Response) => {
//   const message = req.query.message;
//   const contract = getMessengerContract();
//   const response = await contract.setMessage(message);
//   res.json({
//     message: response
//   });
// });
app.listen(port, () => {
    console.log(`⚡️[server]: DApp API Server is running at http://localhost:${port}`);
});
