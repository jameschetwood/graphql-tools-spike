const {
  schema: authorsSchema,
  resolvers: authorsResolvers
} = require("./authors");
const { schema: booksSchema, resolvers: booksResolvers } = require("./books");

const typeDefs = [authorsSchema, booksSchema];
const resolvers = [authorsResolvers, booksResolvers];

module.exports.typeDefs = typeDefs;
module.exports.resolvers = resolvers;
