const db = require("../models");
const Contractor = db.contractors;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.contractor_id) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    const contractor = {
      contractor_id: req.body.contractor_id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      license_number: req.body.license_number,
      created_By: req.body.created_By,
      updated_By: req.body.updated_By,
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
  const contractor_id = req.query.contractor_id;
  var condition = contractor_id ? { contractor_id: { [Op.like]: `%${contractor_id}%` } } : null;

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
    const contractor_id = req.body.contractor_id;

    Contractor.findByPk(contractor_id)
        .then(data => {
            res.send(data);
        })

        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Contractor with id=" + contractor_id
            });
        });
};

exports.update = (req, res) => {
    const contractor_id = req.body.contractor_id;
  
    Contractor.update(req.body, {
      where: { contractor_id: contractor_id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: `Contractor with contractor_id=${contractor_id} was updated successfully.`
          });
        } else {
          res.send({
            message: `Cannot update Contractor with contractor_id=${contractor_id}. Maybe Contractor was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Contractor with contractor_id=" + contractor_id
        });
      });
  };

exports.delete = (req, res) => {
    const contractor_id = req.body.contractor_id;
  
    Contractor.destroy({
      where: { contractor_id: contractor_id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: `Contractor with contractor_id=${contractor_id} was deleted successfully!`
          });
        } else {
          res.send({
            message: `Cannot delete Contractor with contractor_id=${contractor_id}. Maybe Contractor was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Contractor with contractor_id=" + contractor_id
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


