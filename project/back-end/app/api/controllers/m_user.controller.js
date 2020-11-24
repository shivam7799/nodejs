const db = require("../models");
const M_user = db.m_users;
const Op = db.Sequelize.Op;

//Create a New Object
//Create and Save New Tutorial:

exports.create = (req, res) => {
    // Validate request
    if (!req.body.m_first_name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a M_user
    const m_user = {
      // m_user_id: req.body.m_user_id,
      m_first_name: req.body.m_first_name,
      m_last_name: req.body.m_last_name,
    };
  
    // Save M_user in the database
    M_user.create(m_user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the M_user."
        });
      });
  };


//Retrieve all M_users from the database:

exports.findAll = (req, res) => {
  const m_first_name = req.query.m_first_name;
  var condition = m_first_name ? { m_first_name: { [Op.like]: `%${m_first_name}%` } } : null;

  M_user.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving M_users."
      });
    });
};

  
//Retrieve a single object
//Find a single Tutorial with an id:

exports.findOne = (req, res) => {
    const id = req.params.id;

    M_user.findByPk(id)
        .then(data => {
            res.send(data);
        })

        .catch(err => {
            res.status(500).send({
                message: "Error retrieving M_user with id=" + id
            });
        });
};

//Update an Object
//Update a Tutorial identified by the id in the request.

exports.update = (req, res) => {
    const id = req.params.id;
  
    M_user.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "M_user was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update M_user with m_user_id=${id}. Maybe M_user was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating M_user with m_user_id=" + id
        });
      });
  };

//Delete an object
//Delete the Tutorial with specified id.

exports.delete = (req, res) => {
    const id = req.params.id;
  
    M_user.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "M_user was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete M_user with m_user_id=${id}. Maybe M_user was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete M_user with m_user_id=" + id
        });
      });
  };


//Delete all Objects
exports.deleteAll = (req, res) => {
  M_user.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} M_users were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all M_users."
      });
    });
};


