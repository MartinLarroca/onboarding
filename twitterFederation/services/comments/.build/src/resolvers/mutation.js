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
const comment_1 = require("../models/comment");
exports.default = {
    addComment: (_, { comment }) => __awaiter(void 0, void 0, void 0, function* () { return yield comment_1.Comment.create(comment); }),
    updateComment: (_, _a) => { var _b, id, data; return __awaiter(void 0, void 0, void 0, function* () {
        _b = _a.com, { id } = _b, data = __rest(_b, ["id"]);
        const comment = yield comment_1.Comment.findByPk(id);
        return yield comment.update(data);
    }); },
    deleteComment: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
        const comment = yield comment_1.Comment.findByPk(id);
        return yield comment.destroy();
    }),
};
//# sourceMappingURL=mutation.js.map