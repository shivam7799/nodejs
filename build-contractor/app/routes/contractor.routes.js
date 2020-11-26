module.exports = app => {
    const contractors = require("../controllers/contractor.controller.js");

    var router = require("express").Router();

    //create new contractor
    router.post("/",contractors.create);

    //retrieve all contractors
    router.get("/", contractors.findAll);

    // Retrieve a single contractor with id
    router.get("/:id", contractors.findOne);

    //update a contractor with id
    router.put("/:id", contractors.update);

    //delete a contractor with id
    router.delete("/:id", contractors.delete);

    //delete all contractors
    router.delete("/", contractors.deleteAll);

    app.use("/api/contractors", router);
};
