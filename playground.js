const express = require("express");
const graphqlHTTP = require("express-graphql");
const { typeDefs, resolvers } = require("./modules");
const { makeExecutableSchema } = require("graphql-tools");

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const app = express();

app.use(
  "/play",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const PORT = 4002;

app.listen(PORT);

console.log(`running on http://localhost:${PORT}/play`);
