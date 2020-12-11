const db = require("./app/models");
const Property_owner = db.property_owners;
const Op = db.Sequelize.Op;

Property_owner.findAll()
    .then(data => {
      console.log(data)
    })
    .catch(err => {
     console.log(err)
    });

Property_owner.findByPk()
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err);
    })

const Query = {
    property_owner: (root, args) => Property_owner.findByPk(args.property_owner_id),
    property_owners: () => Property_owner.findAll()
};
module.exports = {Query};