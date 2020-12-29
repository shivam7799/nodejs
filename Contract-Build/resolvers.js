const db = require("./app/models");
const Contractors = db.contractors;
const Users = db.users;
const Op = db.Sequelize.Op;

Users.findAll()
  .then(data => {
    return data;
  })
  .catch(err => {
    return err;
  });

Users.findByPk()
  .then(data => {
    return data;
  })
  .catch(err => {
    return err;
  });

Contractors.findByPk()
  .then(data => {
    return data;
  })
  .catch(err => {
    return err;
  });

Contractors.findAll()
  .then(data => {
    return data;
  })
  .catch(err => {
    return err;
  });

const Query = {
  user: (root, { id }) => db.users.get(id),
  contractor: (root, { id }) => db.contractors.get(id),
  contractors: () => db.contractors.list()
};

const User = {
  contractors: user =>
    db.contractors.list().filter(contractor => contractor.id === user.id)
};

const Contractor = {
  user: contractor => db.users.get(contractor.id)
};
module.exports = { Query, User, Contractor };
