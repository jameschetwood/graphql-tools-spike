const gql = require("fake-tag");

const schema = gql`
  extend type Query {
    getBooks: [Book]
  }

  type Book {
    title: String
    author: Author
  }
`;

const resolvers = {
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

module.exports.schema = schema;
module.exports.resolvers = resolvers;
