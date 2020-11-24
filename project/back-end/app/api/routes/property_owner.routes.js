module.exports = app => {
    const property_owners = require("../controllers/backend_user.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Backend_user
    router.post("/", property_owners.create);
  
    // Retrieve all Backend_users
    router.get("/", property_owners.findAll);
  
    // Retrieve a single Backend_user with id
    router.get("/:property_owner_id", property_owners.findOne);
  
    // Update a Backend_user with id
    router.put("/:property_owner_id", property_owners.update);
  
    // Delete a Backend_user with id
    router.delete("/:property_owner_id", property_owners.delete);
  
    // Delete all Backend_users
    router.delete("/", property_owners.deleteAll);
  
    app.use('/api/property_owner', router);
  };