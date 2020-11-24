module.exports = app => {
    const backend_users = require("../controllers/backend_user.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Backend_user
    router.post("/", backend_users.create);
  
    // Retrieve all Backend_users
    router.get("/", backend_users.findAll);
  
    // Retrieve a single Backend_user with id
    router.get("/:backend_user_id", backend_users.findOne);
  
    // Update a Backend_user with id
    router.put("/:backend_user_id", backend_users.update);
  
    // Delete a Backend_user with id
    router.delete("/:backend_user_id", backend_users.delete);
  
    // Delete all Backend_users
    router.delete("/", backend_users.deleteAll);
  
    app.use('/api/backend_user', router);
  };