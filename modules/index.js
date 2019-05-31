const { makeExecutableSchema } = require("graphql-tools");

const {
  schema: authorsSchema,
  resolvers: authorsResolvers
} = require("./authors");
const { schema: booksSchema, resolvers: booksResolvers } = require("./books");

const typeDefs = [authorsSchema, booksSchema];
const resolvers = [authorsResolvers, booksResolvers];

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = schema;
