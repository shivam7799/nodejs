const db = require("./app/models");
const Contractor = db.contractors;
const Op = db.Sequelize.Op;

Contractor.findAll()
    .then(data => {
      console.log(data)
    })
    .catch(err => {
     console.log(err)
    });

Contractor.findByPk()
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err);
    })

const Query = {
    contractor: (root, args) => Contractor.findByPk(args.contractor_id),
    contractors: () => Contractor.findAll()
};
module.exports = {Query};