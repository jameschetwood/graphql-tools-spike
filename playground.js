const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./modules");

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
