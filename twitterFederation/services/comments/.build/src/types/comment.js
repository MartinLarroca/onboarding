"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
exports.default = (0, apollo_server_1.gql) `
  type Comment {
    id: ID!
    userId: ID!
    tweetId: ID!
    comment: String!
    createdAt: Date
    updatedAt: Date
    tweet: Tweet
    user: User
  }
`;
//# sourceMappingURL=comment.js.map