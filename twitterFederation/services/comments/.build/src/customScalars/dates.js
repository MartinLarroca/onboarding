"use strict";
const graphql_1 = require("graphql");
const apollo_server_1 = require("apollo-server");
const definition = (0, apollo_server_1.gql) `
  scalar Date
`;
const resolver = new graphql_1.GraphQLScalarType({
    name: 'Date',
    description: 'Custom Date',
    serialize(value) {
        return new Date(value).toString();
    },
});
module.exports = { DateDefiniton: definition, DateResolver: resolver };
//# sourceMappingURL=dates.js.map