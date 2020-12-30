module.exports = app => {
  const property_owners = require("../controllers/property_owner.controller.js");

  var router = require("express").Router();

  router.post("/", property_owners.create);
  router.get("/", property_owners.findAll);
  router.get("/:id", property_owners.findOne);
  router.put("/:id", property_owners.update);
  router.delete("/:id", property_owners.delete);
  router.delete("/", property_owners.deleteAll);

  app.use("/api/property_owners", router);
};
