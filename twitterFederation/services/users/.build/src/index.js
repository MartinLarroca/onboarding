"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./types/index"));
const index_2 = __importDefault(require("./resolvers/index"));
const user_1 = __importDefault(require("./dataloaders/user"));
const apollo_server_lambda_1 = require("apollo-server-lambda");
const federation_1 = require("@apollo/federation");
const server = new apollo_server_lambda_1.ApolloServer({
    debug: false,
    schema: (0, federation_1.buildFederatedSchema)([{ typeDefs: index_1.default, resolvers: index_2.default }]),
    context: () => {
        usersLoader: user_1.default.create();
    },
});
exports.handler = server.createHandler();
//# sourceMappingURL=index.js.map