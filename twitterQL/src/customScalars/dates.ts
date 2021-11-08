import { GraphQLScalarType } from "graphql";
import { gql } from "apollo-server";

const definition = gql`
  scalar Date
`;

const resolver = new GraphQLScalarType({
  name: "Date",
  description: "Custom Date",
  serialize(value) {
    return new Date(value).toString();
  },
});

export = { dateDefiniton: definition, dateResolver: resolver };
