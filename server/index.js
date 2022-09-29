const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("C:/Users/miked/blog-backend2/schema/schema.js");
const port = process.env.PORT || 2010;
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "DEVELOPMENT",
  })
);
app.listen(port, console.log("server running on " + port));
