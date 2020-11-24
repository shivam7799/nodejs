module.exports = app => {
    const contractors = require("../controllers/contractor.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Contractor
    router.post("/", contractors.create);
  
    // Retrieve all Contractors
    router.get("/", contractors.findAll);
  
    // Retrieve a single Contractor with id
    router.get("/:contractor_id", contractors.findOne);
  
    // Update a Contractor with id
    router.put("/:contractor_id", contractors.update);
  
    // Delete a Contractor with id
    router.delete("/:contractor_id", contractors.delete);
  
    // Delete all Contractors
    router.delete("/", contractors.deleteAll);
  
    app.use('/api/contractors', router);
  };