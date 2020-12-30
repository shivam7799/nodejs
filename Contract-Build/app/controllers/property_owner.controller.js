const db = require("../models");
const Propery_owner = db.property_owners;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const property_owner = {
    id: req.body.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    mobile: req.body.mobile
  };

  Propery_owner.create(property_owner)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the Property_owner."
      });
    });
};

exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;

  Propery_owner.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Property_owners."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.body.id;

  Propery_owner.findByPk(id)
    .then(data => {
      res.send(data);
    })

    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Property_owner with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.body.id;

  Propery_owner.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: `Property_owner with id = ${id} was updated successfully.`
        });
      } else {
        res.send({
          message: `Cannot update Property_owner with id=${id}. Maybe Property_owner was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Property_owner with property_owner_id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.body.id;

  Propery_owner.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: `Property_owner with id = ${id} was deleted successfully!`
        });
      } else {
        res.send({
          message: `Cannot delete Property_owner with id=${id}. Maybe Property_owner was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Property_owner with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Propery_owner.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({
        message: `${nums} Property_owners were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while removing all Property_owners."
      });
    });
};
