import { GraphQLScalarType } from 'graphql';
import { gql } from 'apollo-server';

const definition = gql`
  scalar Date
`;

const resolver = new GraphQLScalarType({
  name: 'Date',
  description: 'Custom Date',
  serialize(value) {
    console.log('mira como me serializo');
    return new Date(value).toString();
  },
});

export = { DateDefiniton: definition, DateResolver: resolver };
