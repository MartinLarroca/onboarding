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
const merge_1 = require("@graphql-tools/merge");
const toMergeTypes = [
    query_1.default,
    user_1.default,
    tweet_1.default,
    comment_1.default,
    dates_1.default.DateDefiniton,
    mutation_1.default,
];
exports.default = (0, merge_1.mergeTypeDefs)(toMergeTypes);
//# sourceMappingURL=index.js.map