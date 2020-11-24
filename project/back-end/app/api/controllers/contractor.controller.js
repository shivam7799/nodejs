const db = require("../models");
const Contractor = db.contractors;
const Op = db.Sequelize.Op;

//Create a New Object
//Create and Save New Contractor:

exports.create = (req, res) => {
    // Validate request
    if (!req.body.contractor_id) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Contractor
    const contractor = {
      contractor_id: req.body.contractor_id,
    };
  
    // Save Contractor in the database
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


//Retrieve all Contractors from the database:

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

  
//Retrieve a single object
//Find a single Contractor with an id:

exports.findOne = (req, res) => {
    const contractor_id = req.params.contractor_id;

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

//Update an Object
//Update a Contractor identified by the id in the request.

exports.update = (req, res) => {
    const contractor_id = req.params.contractor_id;
  
    Contractor.update(req.body, {
      where: { contractor_id: contractor_id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Contractor was updated successfully."
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

//Delete an object
//Delete the Contractor with specified id.

exports.delete = (req, res) => {
    const contractor_id = req.params.contractor_id;
  
    Contractor.destroy({
      where: { contractor_id: contractor_id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Contractor was deleted successfully!"
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


//Delete all Objects
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


