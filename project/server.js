const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

const db = require("./back-end/app/api/models");
db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to  application." });
});

require("./back-end/app/api/routes/m_user.routes.js")(app);
require("./back-end/app/api/routes/contractor.routes.js")(app);
require("./back-end/app/api/routes/property_owner.routes.js")(app);
require("./back-end/app/api/routes/backend_user.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});