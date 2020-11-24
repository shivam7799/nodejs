const db = require("../models");
const Backend_user = db.backend_users;
const Op = db.Sequelize.Op;

//Create a New Object
//Create and Save New Backend_user:

exports.create = (req, res) => {
    // Validate request
    if (!req.body.backend_user_id) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Backend_user
    const Backend_user = {
        backend_user_id: req.body.backend_user_id,
    };
  
    // Save Backend_user in the database
    Backend_user.create(backend_user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Backend_user."
        });
      });
  };


//Retrieve all Backend_users from the database:

exports.findAll = (req, res) => {
  const backend_user_id = req.query.backend_user_id;
  var condition = backend_user_id ? { backend_user_id: { [Op.like]: `%${backend_user_id}%` } } : null;

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

  
//Retrieve a single object
//Find a single Backend_user with an id:

exports.findOne = (req, res) => {
    const backend_user_id = req.params.backend_user_id;

    Backend_user.findByPk(backend_user_id)
        .then(data => {
            res.send(data);
        })

        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Backend_user with id=" + backend_user_id
            });
        });
};

//Update an Object
//Update a Backend_user identified by the id in the request.

exports.update = (req, res) => {
    const backend_user_id = req.params.backend_user_id;
  
    Backend_user.update(req.body, {
      where: { backend_user_id: backend_user_id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Backend_user was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Backend_user with backend_user_id=${backend_user_id}. Maybe Backend_user was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Backend_user with backend_user_id=" + backend_user_id
        });
      });
  };

//Delete an object
//Delete the Backend_user with specified id.

exports.delete = (req, res) => {
    const backend_user_id = req.params.backend_user_id;
  
    Property_owner.destroy({
      where: { backend_user_id: backend_user_id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Backend_user was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Backend_user with backend_user_id=${backend_user_id}. Maybe Backend_user was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Backend_user with backend_user_id=" + backend_user_id
        });
      });
  };


//Delete all Objects
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


