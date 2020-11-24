const db = require("../models");
const Property_owner = db.property_owners;
const Op = db.Sequelize.Op;

//Create a New Object
//Create and Save New Property_owner:

exports.create = (req, res) => {
    // Validate request
    if (!req.body.property_owner_id) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Property_owner
    const Property_owner = {
        property_owner_id: req.body.property_owner_id,
    };
  
    // Save Property_owner in the database
    Property_owner.create(property_owner)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Property_owner."
        });
      });
  };


//Retrieve all Property_owners from the database:

exports.findAll = (req, res) => {
  const property_owner_id = req.query.property_owner_id;
  var condition = property_owner_id ? { property_owner_id: { [Op.like]: `%${property_owner_id}%` } } : null;

  Property_owner.findAll({ where: condition })
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

  
//Retrieve a single object
//Find a single Property_owner with an id:

exports.findOne = (req, res) => {
    const property_owner_id = req.params.property_owner_id;

    Property_owner.findByPk(property_owner_id)
        .then(data => {
            res.send(data);
        })

        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Property_owner with id=" + property_owner_id
            });
        });
};

//Update an Object
//Update a Property_owner identified by the id in the request.

exports.update = (req, res) => {
    const property_owner_id = req.params.property_owner_id;
  
    Property_owner.update(req.body, {
      where: { property_owner_id: property_owner_id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Property_owner was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Property_owner with property_owner_id=${property_owner_id}. Maybe Property_owner was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Property_owner with property_owner_id=" + property_owner_id
        });
      });
  };

//Delete an object
//Delete the Property_owner with specified id.

exports.delete = (req, res) => {
    const property_owner_id = req.params.property_owner_id;
  
    Property_owner.destroy({
      where: { property_owner_id: property_owner_id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Property_owner was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Property_owner with property_owner_id=${property_owner_id}. Maybe Property_owner was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Property_owner with property_owner_id=" + property_owner_id
        });
      });
  };


//Delete all Objects
exports.deleteAll = (req, res) => {
  Property_owner.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Property_owners were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Property_owners."
      });
    });
};


