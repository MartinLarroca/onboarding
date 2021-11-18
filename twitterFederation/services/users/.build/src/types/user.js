"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
exports.default = (0, apollo_server_1.gql) `
  type User @key(fields: "id") {
    id: ID!
    name: String!
    surname: String!
    email: String!
    createdAt: Date
    updatedAt: Date
  }

  input CreateUserInput {
    name: String!
    surname: String!
    email: String!
  }

  input UpdateUserInput {
    id: ID!
    name: String
    surname: String
    email: String
  }
`;
//# sourceMappingURL=user.js.map