module.exports = app => {
    const users = require("../controllers/user.controller.js");

    var router = require("express").Router();

    router.post("/",users.create);

    router.get("/", users.findAll);

    router.get("/:user_id", users.findOne);

    router.put("/:user_id", users.update);

    router.delete("/:user_id", users.delete);

    router.delete("/", users.deleteAll);

    app.use("/api/users", router);
};
