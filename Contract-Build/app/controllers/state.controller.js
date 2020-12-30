const db = require("../models");
const State = db.states;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const state = {
    name: req.body.name
  };

  State.create(state)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the state."
      });
    });
};

exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;

  State.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving states."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.body.id;

  State.findByPk(id)
    .then(data => {
      res.send(data);
    })

    .catch(err => {
      res.status(500).send({
        message: "Error retrieving state with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.body.id;

  State.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: `state with id = ${id} was updated successfully.`
        });
      } else {
        res.send({
          message: `Cannot update state with id=${id}. Maybe state was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating state with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.body.id;

  State.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: `state with id = ${id} was deleted successfully!`
        });
      } else {
        res.send({
          message: `Cannot delete state with id=${id}. Maybe state was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete state with id = " + id
      });
    });
};

exports.deleteAll = (req, res) => {
  State.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} states were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all states."
      });
    });
};
