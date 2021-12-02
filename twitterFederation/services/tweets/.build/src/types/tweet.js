"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
exports.default = (0, apollo_server_1.gql) `
  type Tweet @key(fields: "id") {
    id: ID!
    userId: ID!
    text: String!
    createdAt: Date
    updatedAt: Date
    user: User
  }
`;
//# sourceMappingURL=tweet.js.map