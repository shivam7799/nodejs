const db = require("../models");
const Backend_user = db.backend_users;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const backend_user = {
    first_name: req.body.first_name,
    last_name: req.body.last_name
  };

  Backend_user.create(backend_user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating the Backend_user."
      });
    });
};

exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;

  Backend_user.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Backend_users."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.body.id;

  Backend_user.findByPk(id)
    .then(data => {
      res.send(data);
    })

    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Backend_user with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.body.id;

  Backend_user.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: `Backend_user with id = ${id} was updated successfully.`
        });
      } else {
        res.send({
          message: `Cannot update Backend_user with id=${id}. Maybe Backend_user was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Backend_user with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.body.id;

  Backend_user.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: `Backend_user with id = ${id} was deleted successfully!`
        });
      } else {
        res.send({
          message: `Cannot delete Backend_user with id=${id}. Maybe Backend_user was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Backend_user with id = " + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Backend_user.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Backend_users were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Backend_users."
      });
    });
};
