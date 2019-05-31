const { graphql } = require("graphql");
const { makeExecutableSchema } = require("graphql-tools");

const { schema: authorsSchema } = require("./modules/authors");
const { schema: booksSchema } = require("./modules/books");

const resolvers = {
  Query: {
    getBooks: () => {
      return [
        {
          title: "Harry Potter",
          author: {
            name: "JK Rowling 2"
          }
        }
      ];
    },
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
