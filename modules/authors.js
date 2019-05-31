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

module.exports.schema = schema;
