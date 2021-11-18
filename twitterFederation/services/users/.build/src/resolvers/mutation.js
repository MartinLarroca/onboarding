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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
exports.default = {
    addUser: (_, data) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield user_1.User.create(data.user);
        return user;
    }),
    updateUser: (_, data) => __awaiter(void 0, void 0, void 0, function* () {
        const _a = data.user, { id } = _a, user_data = __rest(_a, ["id"]);
        yield user_1.User.update(user_data, { where: { id } });
        return yield user_1.User.findByPk(id, { raw: true });
    }),
    deleteUser: (_, data) => __awaiter(void 0, void 0, void 0, function* () {
        const elim = yield user_1.User.destroy({ where: { id: data.id } });
        return data.id;
    }),
};
//# sourceMappingURL=mutation.js.map