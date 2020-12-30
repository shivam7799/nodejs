module.exports = app => {
  const property_types = require("../controllers/property_type.controller.js");

  var router = require("express").Router();

  router.post("/", property_types.create);

  router.get("/", property_types.findAll);

  router.get("/:id", property_types.findOne);

  router.put("/:id", property_types.update);

  router.delete("/:id", property_types.delete);

  router.delete("/", property_types.deleteAll);

  app.use("/api/property_types", router);
};
