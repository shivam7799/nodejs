const db = require("./app/models");
const Backend_user = db.backend_users;
const Op = db.Sequelize.Op;

Backend_user.findAll()
    .then(data => {
      console.log(data)
    })
    .catch(err => {
     console.log(err)
    });

Backend_user.findByPk()
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err);
    })

const Query = {
    backend_user: (root, args) => Backend_user.findByPk(args.backend_user_id),
    backend_users: () => Backend_user.findAll()
};
module.exports = {Query};