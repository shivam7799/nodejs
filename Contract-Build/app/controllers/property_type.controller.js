const db = require("../models");
const Property_Type = db.property_types;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const property_type = {
    name: req.body.name
  };

  Property_Type.create(property_type)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the property_type."
      });
    });
};

exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;

  Property_Type.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving property_types."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.body.id;

  Property_Type.findByPk(id)
    .then(data => {
      res.send(data);
    })

    .catch(err => {
      res.status(500).send({
        message: "Error retrieving property_type with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.body.id;

  Property_Type.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: `property_type with id = ${id} was updated successfully.`
        });
      } else {
        res.send({
          message: `Cannot update property_type with id=${id}. Maybe property_type was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating property_type with property_type_id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.body.id;

  Property_Type.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: `property_type with id = ${id} was deleted successfully!`
        });
      } else {
        res.send({
          message: `Cannot delete property_type with id=${id}. Maybe property_type was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete property_type with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Property_Type.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({
        message: `${nums} property_types were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while removing all property_types."
      });
    });
};
