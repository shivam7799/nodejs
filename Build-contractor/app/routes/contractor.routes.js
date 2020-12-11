module.exports = app => {
    const contractors = require("../controllers/contractor.controller.js");

    var router = require("express").Router();

    router.post("/",contractors.create);
    router.get("/", contractors.findAll);
    router.get("/:contractor_id", contractors.findOne);
    router.put("/:contractor_id", contractors.update);
    router.delete("/:contractor_id", contractors.delete);
    router.delete("/", contractors.deleteAll);

    app.use("/api/contractors", router);
};
