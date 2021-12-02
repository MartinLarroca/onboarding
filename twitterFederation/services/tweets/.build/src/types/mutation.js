"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
exports.default = (0, apollo_server_1.gql) `
  input CreateTweetInput {
    userId: ID!
    text: String!
  }

  input UpdateTweetInput {
    id: ID!
    text: String!
  }

  type Mutation {
    addTweet(tweet: CreateTweetInput): Tweet
    updateTweet(tweet: UpdateTweetInput): Tweet
    deleteTweet(id: ID!): Tweet
  }
`;
//# sourceMappingURL=mutation.js.map