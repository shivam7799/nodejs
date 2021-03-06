const fs = require("fs");
const { ApolloServer, gql } = require("apollo-server-express");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to My application." });
});

require("./app/routes/contractor.routes.js")(app);
require("./app/routes/user.routes.js")(app);
require("./app/routes/backend_user.routes.js")(app);
require("./app/routes/property_owner.routes.js")(app);
require("./app/routes/property_type.routes.js")(app);
require("./app/routes/property_sub_type.routes.js")(app);
require("./app/routes/country.routes.js")(app);
require("./app/routes/state.routes.js")(app);

const typeDefs = gql(
  fs.readFileSync("./schema.graphql", { encoding: "utf-8" })
);
const resolvers = require("./resolvers");
const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app, path: "/graphql" });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
