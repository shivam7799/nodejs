module.exports = app => {
  const backend_users = require("../controllers/backend_user.controller.js");

  var router = require("express").Router();

  router.post("/", backend_users.create);
  router.get("/", backend_users.findAll);
  router.get("/:id", backend_users.findOne);
  router.put("/:id", backend_users.update);
  router.delete("/:id", backend_users.delete);
  router.delete("/", backend_users.deleteAll);

  app.use("/api/backend_users", router);
};
