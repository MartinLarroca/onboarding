"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_1 = __importDefault(require("./query"));
const mutation_1 = __importDefault(require("./mutation"));
const user_1 = __importDefault(require("./user"));
const dates_1 = __importDefault(require("../customScalars/dates"));
const Resolvers = {
    Query: query_1.default,
    Mutation: mutation_1.default,
    User: user_1.default,
    Date: dates_1.default.DateResolver,
};
exports.default = Resolvers;
//# sourceMappingURL=index.js.map