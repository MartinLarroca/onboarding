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
const tweet_1 = require("../models/tweet");
var DataLoaderType;
(function (DataLoaderType) {
    DataLoaderType[DataLoaderType["User"] = 0] = "User";
    DataLoaderType[DataLoaderType["Reference"] = 1] = "Reference";
    DataLoaderType[DataLoaderType["UserReference"] = 2] = "UserReference";
})(DataLoaderType || (DataLoaderType = {}));
exports.DataLoaderType = DataLoaderType;
const tweetsByIds = (ids) => __awaiter(void 0, void 0, void 0, function* () {
    const tweets = yield tweet_1.Tweet.findAll({ where: { id: ids } });
    const groupedTweets = (0, ramda_1.groupBy)((tweet) => tweet.id.toString(), tweets);
    return ids.map((id) => groupedTweets[id.toString()][0]);
});
const tweetsByUsersIds = (ids) => __awaiter(void 0, void 0, void 0, function* () {
    const tweets = yield tweet_1.Tweet.findAll({ where: { userId: ids } });
    const groupedTweets = (0, ramda_1.groupBy)((tweet) => tweet.userId, tweets);
    return ids.map((id) => (groupedTweets[id] == null ? [] : groupedTweets[id]));
});
const tweetsUserReference = (ids) => __awaiter(void 0, void 0, void 0, function* () {
    const tweets = yield tweet_1.Tweet.findAll({ where: { id: ids } });
    const groupedTweets = (0, ramda_1.groupBy)((elem) => elem.id.toString(), tweets);
    return ids.map((id) => ({
        __typename: 'User',
        id: groupedTweets[id][0].userId,
    }));
});
const create = (value) => {
    switch (value) {
        case DataLoaderType.Reference:
            return new dataloader_1.default(tweetsByIds);
        case DataLoaderType.User:
            return new dataloader_1.default(tweetsByUsersIds);
        case DataLoaderType.UserReference:
            return new dataloader_1.default(tweetsUserReference);
    }
};
exports.create = create;
//# sourceMappingURL=tweet.js.map