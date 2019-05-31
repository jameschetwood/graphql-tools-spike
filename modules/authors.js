const gql = require("fake-tag");

const schema = gql`
  type Query {
    getAuthors: [Author]
  }

  type Author {
    name: String
    books: [Book]
  }
`;

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
    }
  }
};

module.exports.schema = schema;
module.exports.resolvers = resolvers;
