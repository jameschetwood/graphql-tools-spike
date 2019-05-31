const { graphql } = require("graphql");
const { find, filter } = require("lodash");
const { makeExecutableSchema } = require("graphql-tools");

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

const typeDefs = `
  type Query {
    getBooks: [Book]
    getAuthors: [Author]
  }

  type Author {
    name: String
    books: [Book]
  }

  type Book {
    title: String
    author: Author
  }
`;

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
