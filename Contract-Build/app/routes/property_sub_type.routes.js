module.exports = app => {
  const property_sub_types = require("../controllers/property_sub_type.controller.js");

  var router = require("express").Router();

  router.post("/", property_sub_types.create);

  router.get("/", property_sub_types.findAll);

  router.get("/:id", property_sub_types.findOne);

  router.put("/:id", property_sub_types.update);

  router.delete("/:id", property_sub_types.delete);

  router.delete("/", property_sub_types.deleteAll);

  app.use("/api/property_sub_types", router);
};
