const { graphql } = require("graphql");
const { makeExecutableSchema } = require("graphql-tools");

const {
  schema: authorsSchema,
  resolvers: authorsResolvers
} = require("./modules/authors");
const { schema: booksSchema } = require("./modules/books");

// console.log(authorsResolvers);

const resolvers1 = {
  Query: {
    getAuthors: () => {
      return [
        {
          name: "JK Rowling",
          books: [
            {
              title: "Harry Potter 2"
            }
          ]
        }
      ];
    }
  }
};

const typeDefs = [authorsSchema, booksSchema];
const resolvers = [resolvers1, authorsResolvers];

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const query = `
  query {
    getBooks {
        title
    }
  }
`;

graphql(schema, query).then(result => {
  console.log(result);
  console.log(result.data.getBooks[0]);
});
