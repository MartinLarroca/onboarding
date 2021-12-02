"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
exports.default = (0, apollo_server_1.gql) `
  extend type Query {
    comments: [Comment!]!
    comment(id: ID!): Comment
  }
`;
//# sourceMappingURL=query.js.map