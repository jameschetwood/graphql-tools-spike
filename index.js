const { graphql } = require("graphql");
const { makeExecutableSchema } = require("graphql-tools");
const gql = require("fake-tag");

const { schema: authorsSchema } = require("./modules/authors");

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

const typeDefs1 = gql`
  type Query {
    getAuthors: [Author]
  }

  type Author {
    name: String
    books: [Book]
  }
`;

const typeDefs2 = gql`
  extend type Query {
    getBooks: [Book]
  }

  type Book {
    title: String
    author: Author
  }
`;

const typeDefs = authorsSchema + typeDefs2;

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
