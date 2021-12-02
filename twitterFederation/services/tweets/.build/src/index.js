"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const index_1 = __importDefault(require("./types/index"));
const index_2 = __importDefault(require("./resolvers/index"));
const tweet_1 = require("./dataloaders/tweet");
const apollo_server_lambda_1 = require("apollo-server-lambda");
const federation_1 = require("@apollo/federation");
const server = new apollo_server_lambda_1.ApolloServer({
    debug: false,
    schema: (0, federation_1.buildFederatedSchema)([{ typeDefs: index_1.default, resolvers: index_2.default }]),
    context: () => {
        return {
            ResolveReferenceLoader: (0, tweet_1.create)(tweet_1.DataLoaderType.Reference),
            TweetsGivenUserLoader: (0, tweet_1.create)(tweet_1.DataLoaderType.User),
            TweetsUserReferenceLoader: (0, tweet_1.create)(tweet_1.DataLoaderType.UserReference),
        };
    },
});
exports.handler = server.createHandler();
//# sourceMappingURL=index.js.map