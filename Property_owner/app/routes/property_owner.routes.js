module.exports = app => {
    const property_owners = require("../controllers/property_owner.controller.js");

    var router = require("express").Router();

    router.post("/",property_owners.create);
    router.get("/",property_owners.findAll);
    router.get("/:property_owner_id",property_owners.findOne);
    router.put("/:property_owner_id",property_owners.update);
    router.delete("/:property_owner_id",property_owners.delete);
    router.delete("/",property_owners.deleteAll);

    app.use("/api/property-owners",router);
};
