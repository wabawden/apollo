import  { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import ResolutionsSchema from '../../api/resolutions/resolutions.graphql'

const typeDefs = [`
type Query {
  hi: String
  resolutions: [Resolution]
}
`, ResolutionsSchema];

const resolvers = {
  Query: {
    hi() {
      return "Hello Level Up";
    },
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

createApolloServer({ schema });