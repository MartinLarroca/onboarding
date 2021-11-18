"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
exports.default = (0, apollo_server_1.gql) `
  extend type Mutation {
    addUser(user: CreateUserInput): User
    updateUser(user: UpdateUserInput): User
    deleteUser(id: String): String
  }
`;
//# sourceMappingURL=mutation.js.map