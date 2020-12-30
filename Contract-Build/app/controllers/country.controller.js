const db = require("../models");
const Country = db.countries;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const country = {
    name: req.body.name
  };

  Country.create(country)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while creating the country."
      });
    });
};

exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;

  Country.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving countries."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.body.id;

  Country.findByPk(id)
    .then(data => {
      res.send(data);
    })

    .catch(err => {
      res.status(500).send({
        message: "Error retrieving country with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.body.id;

  Country.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: `country with id = ${id} was updated successfully.`
        });
      } else {
        res.send({
          message: `Cannot update country with id=${id}. Maybe country was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating country with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.body.id;

  Country.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: `country with id = ${id} was deleted successfully!`
        });
      } else {
        res.send({
          message: `Cannot delete country with id=${id}. Maybe country was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete country with id = " + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Country.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} countries were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all countries."
      });
    });
};
