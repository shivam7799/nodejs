const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.user_id) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

    const user = {
      user_id: req.body.user_id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      created_By: req.body.created_By,
      updated_By: req.body.updated_By,
    };

    User.create(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      });
  };

exports.findAll = (req, res) => {
  const user_id = req.query.user_id;
  var condition = user_id ? { user_id: { [Op.like]: `%${user_id}%` } } : null;

  User.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Users."
      });
    });
};

exports.findOne = (req, res) => {
    const user_id = req.body.user_id;

    User.findByPk(user_id)
        .then(data => {
            res.send(data);
        })

        .catch(err => {
            res.status(500).send({
                message: "Error retrieving User with id=" + user_id
            });
        });
};

exports.update = (req, res) => {
    const user_id = req.body.user_id;
  
    User.update(req.body, {
      where: { user_id: user_id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update User with user_id=${user_id}. Maybe User was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User with contractor_id=" + user_id
        });
      });
  };

exports.delete = (req, res) => {
    const user_id = req.body.user_id;
  
    User.destroy({
      where: { user_id: user_id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete User with user_id=${user_id}. Maybe User was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User with user_id=" + user_id
        });
      });
  };

exports.deleteAll = (req, res) => {
  User.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Users were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Users."
      });
    });
};


