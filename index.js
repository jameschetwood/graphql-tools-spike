const { graphql } = require("graphql");
const { makeExecutableSchema } = require("graphql-tools");

const {
  schema: authorsSchema,
  resolvers: authorsResolvers
} = require("./modules/authors");
const {
  schema: booksSchema,
  resolvers: booksResolvers
} = require("./modules/books");

const typeDefs = [authorsSchema, booksSchema];
const resolvers = [authorsResolvers, booksResolvers];

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const query = `
  query {
    getBooks {
        title
    }
    getAuthors {
      name
    }
  }
`;

graphql(schema, query).then(result => {
  console.log(result);
  console.log(result.data.getBooks[0]);
  console.log(result.data.getAuthors[0]);
});
