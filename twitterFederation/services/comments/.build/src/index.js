"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const apollo_server_lambda_1 = require("apollo-server-lambda");
const index_1 = __importDefault(require("./types/index"));
const index_2 = __importDefault(require("./resolvers/index"));
const comment_1 = require("./dataloaders/comment");
const federation_1 = require("@apollo/federation");
const server = new apollo_server_lambda_1.ApolloServer({
    debug: false,
    schema: (0, federation_1.buildFederatedSchema)([{ typeDefs: index_1.default, resolvers: index_2.default }]),
    context: () => {
        return {
            CommentsGivenUserLoader: (0, comment_1.create)(comment_1.DataLoaderType.User),
            CommentsGivenTweetLoader: (0, comment_1.create)(comment_1.DataLoaderType.Tweet),
            CommentsUserReferenceLoader: (0, comment_1.create)(comment_1.DataLoaderType.UserReference),
            CommentsTweetReferenceLoader: (0, comment_1.create)(comment_1.DataLoaderType.TweetReference),
        };
    },
});
exports.handler = server.createHandler();
//# sourceMappingURL=index.js.map