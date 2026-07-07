const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const { Pool } = require("pg");










//formatting created_at time: 
const { GraphQLScalarType, Kind } = require("graphql");

const DateTime = new GraphQLScalarType({
  name: "DateTime",
  description: "Formatted date-time scalar",

  serialize(value) {
    // value coming from DB → Date object
    return new Date(value).toISOString(); // or any format you want
  },

  parseValue(value) {
    // value from client → server
    return new Date(value);
  },

  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return new Date(ast.value);
    }
    return null;
  },
});


// PostgreSQL connection
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "DB2026",
  password: "password",
  port: 5432,
});

// GraphQL schema
const schema = buildSchema(`
    scalar DateTime
  type Query {
    hello: String
    users: [User]
  }

  type User {
    id: ID
    name: String
    email: String
    created_at: DateTime
  }
`);

// Resolvers
const root = {
    DateTime,
  hello: () => "Hello from Express + GraphQL 👋",
  users: async () => {
    const res = await pool.query("SELECT * FROM users");
    return res.rows;
  },
};

const app = express();

// GraphQL endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true, // browser UI
  })
);

app.listen(4000, () => {
  console.log("🚀 Server running at http://localhost:4000/graphql");
});
