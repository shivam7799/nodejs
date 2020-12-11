const db = require("../models");
const Backend_user = db.backend_users;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if(!req.body.backend_user_id){
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const backend_user = {
        backend_user_id: req.body.backend_user_id,
        backend_user_first_name: req.body.backend_user_first_name,
        backend_user_last_name: req.body.backend_user_last_name,
        created_By: req.body.created_By,
        updated_By: req.body.updated_By,
    };

    Backend_user.create(backend_user)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occured while creating the Backend_user."
        });
    });
};


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
  
  exports.findOne = (req, res) => {
      const backend_user_id = req.body.backend_user_id;
  
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
  
  exports.update = (req, res) => {
      const backend_user_id = req.body.backend_user_id;
    
      Backend_user.update(req.body, {
        where: { backend_user_id: backend_user_id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: `Backend_user with backend_user_id = ${backend_user_id} was updated successfully.`
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
  
  exports.delete = (req, res) => {
      const backend_user_id = req.body.backend_user_id;
    
      Backend_user.destroy({
        where: { backend_user_id: backend_user_id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: `Backend_user with backend_user_id = ${backend_user_id} was deleted successfully!`
            });
          } else {
            res.send({
              message: `Cannot delete Backend_user with backend_user_id=${backend_user_id}. Maybe Backend_user was not found!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Could not delete Backend_user with backend_user_id = " + backend_user_id
          });
        });
    };
  
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
  