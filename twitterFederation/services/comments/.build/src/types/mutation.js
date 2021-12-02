"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
exports.default = (0, apollo_server_1.gql) `
  input CreateCommentInput {
    userId: ID!
    tweetId: ID!
    comment: String!
  }

  input UpdateCommentInput {
    id: ID!
    comment: String!
  }

  type Mutation {
    addComment(comment: CreateCommentInput): Comment
    updateComment(comment: UpdateCommentInput): Comment
    deleteComment(id: ID!): Comment
  }
`;
//# sourceMappingURL=mutation.js.map