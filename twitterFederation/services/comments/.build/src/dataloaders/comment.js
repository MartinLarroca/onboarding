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
exports.DataLoaderType = exports.create = void 0;
const ramda_1 = require("ramda");
const dataloader_1 = __importDefault(require("dataloader"));
const comment_1 = require("../models/comment");
var DataLoaderType;
(function (DataLoaderType) {
    DataLoaderType[DataLoaderType["User"] = 0] = "User";
    DataLoaderType[DataLoaderType["Tweet"] = 1] = "Tweet";
    DataLoaderType[DataLoaderType["UserReference"] = 2] = "UserReference";
    DataLoaderType[DataLoaderType["TweetReference"] = 3] = "TweetReference";
})(DataLoaderType || (DataLoaderType = {}));
exports.DataLoaderType = DataLoaderType;
const commentsByUsersIds = (ids) => __awaiter(void 0, void 0, void 0, function* () {
    const comments = yield comment_1.Comment.findAll({ where: { userId: ids } });
    const groupedComments = (0, ramda_1.groupBy)((elem) => elem.userId, comments);
    return ids.map((id) => groupedComments[id] == null ? [] : groupedComments[id]);
});
const commentsByTweetsIds = (ids) => __awaiter(void 0, void 0, void 0, function* () {
    const comments = yield comment_1.Comment.findAll({ where: { tweetId: ids } });
    const groupedComments = (0, ramda_1.groupBy)((elem) => elem.tweetId.toString(), comments);
    return ids.map((id) => groupedComments[id] == null ? [] : groupedComments[id]);
});
const commentsUserReference = (ids) => __awaiter(void 0, void 0, void 0, function* () {
    const comments = yield comment_1.Comment.findAll({ where: { id: ids } });
    const groupedComments = (0, ramda_1.groupBy)((elem) => elem.id.toString(), comments);
    return ids.map((id) => ({
        __typename: 'User',
        id: groupedComments[id][0].userId,
    }));
});
const commentsTweetReference = (ids) => __awaiter(void 0, void 0, void 0, function* () {
    const comments = yield comment_1.Comment.findAll({ where: { id: ids } });
    const groupedComments = (0, ramda_1.groupBy)((elem) => elem.id.toString(), comments);
    return ids.map((id) => ({
        __typename: 'Tweet',
        id: groupedComments[id][0].tweetId,
    }));
});
const create = (value) => {
    switch (value) {
        case DataLoaderType.User:
            return new dataloader_1.default(commentsByUsersIds);
        case DataLoaderType.Tweet:
            return new dataloader_1.default(commentsByTweetsIds);
        case DataLoaderType.UserReference:
            return new dataloader_1.default(commentsUserReference);
        case DataLoaderType.TweetReference:
            return new dataloader_1.default(commentsTweetReference);
    }
};
exports.create = create;
//# sourceMappingURL=comment.js.map