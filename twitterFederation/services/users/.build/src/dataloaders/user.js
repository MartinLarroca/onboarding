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
const ramda_1 = require("ramda");
const dataloader_1 = __importDefault(require("dataloader"));
const user_1 = require("../models/user");
const usersByIds = (ids) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.User.findAll({ where: { id: ids } });
    const groupedUsers = (0, ramda_1.groupBy)((user) => user.id, users);
    return ids.map((id) => groupedUsers[id][0]);
});
exports.default = { create: () => new dataloader_1.default(usersByIds) };
//# sourceMappingURL=user.js.map