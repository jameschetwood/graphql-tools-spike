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

module.exports.schema = schema;
