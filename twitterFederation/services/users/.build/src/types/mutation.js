"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
exports.default = (0, apollo_server_1.gql) `
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

  extend type Mutation {
    addUser(user: CreateUserInput): User
    updateUser(user: UpdateUserInput): User
    deleteUser(id: ID!): User
  }
`;
//# sourceMappingURL=mutation.js.map