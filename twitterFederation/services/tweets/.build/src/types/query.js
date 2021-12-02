"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
exports.default = (0, apollo_server_1.gql) `
  extend type Query {
    tweets: [Tweet!]!
    tweet(id: ID!): Tweet
  }
`;
//# sourceMappingURL=query.js.map