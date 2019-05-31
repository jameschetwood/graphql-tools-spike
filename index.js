const { graphql } = require("graphql");
const gql = require("fake-tag");

const schema = require("./modules");

const query = gql`
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
