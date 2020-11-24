module.exports = app => {
    const m_users = require("../controllers/m_user.controller.js");
  
    var router = require("express").Router();
  
    // Create a new M_user
    router.post("/", m_users.create);
  
    // Retrieve all M_users
    router.get("/", m_users.findAll);
  
    // Retrieve a single M_user with id
    router.get("/:m_user_id", m_users.findOne);
  
    // Update a M_user with id
    router.put("/:m_user_id", m_users.update);
  
    // Delete a M_user with id
    router.delete("/:m_user_id", m_users.delete);
  
    // Delete all M_users
    router.delete("/", m_users.deleteAll);
  
    app.use('/api/m_users', router);
  };