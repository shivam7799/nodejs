const db = require("./app/models");
const User = db.users;
const Op = db.Sequelize.Op;

User.findAll()
    .then((data) => {
        console.log(data);
    })  
    .catch((err) => {
        console.log(err);
    });

User.findByPk()
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err);
    })

const Query = {
    user: (root, args) => User.findByPk(args.user_id),
    users: () => User.findAll()
};

module.exports = {Query};
