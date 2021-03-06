const db = require("../models");
const Contractor = db.contractors;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const contractor = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    mobile: req.body.mobile,
    company_name: req.body.company_name
  };

  Contractor.create(contractor)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Contractor."
      });
    });
};

exports.findAll = (req, res) => {
  const id = req.query.id;
  var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;

  Contractor.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Contractors."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.body.id;

  Contractor.findByPk(id)
    .then(data => {
      res.send(data);
    })

    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Contractor with id=" + id
      });
    });
};

exports.update = (req, res) => {
  const id = req.body.id;

  Contractor.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Contractor was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Contractor with id=${id}. Maybe Contractor was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Contractor with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.body.id;

  Contractor.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Contractor was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Contractor with id=${id}. Maybe Contractor was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Contractor with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Contractor.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Contractors were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Contractors."
      });
    });
};
