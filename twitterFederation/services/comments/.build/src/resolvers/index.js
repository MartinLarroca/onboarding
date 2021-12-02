"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_1 = __importDefault(require("./query"));
const user_1 = __importDefault(require("./user"));
const tweet_1 = __importDefault(require("./tweet"));
const comment_1 = __importDefault(require("./comment"));
const mutation_1 = __importDefault(require("./mutation"));
const dates_1 = __importDefault(require("../customScalars/dates"));
const Resolvers = {
    Query: query_1.default,
    Date: dates_1.default.DateResolver,
    User: user_1.default,
    Tweet: tweet_1.default,
    Comment: comment_1.default,
    Mutation: mutation_1.default,
};
exports.default = Resolvers;
//# sourceMappingURL=index.js.map