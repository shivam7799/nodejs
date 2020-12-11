const db = require("../models");
const Propery_owner = db.property_owners;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if(!req.body.property_owner_id) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const property_owner = {
        property_owner_id: req.body.property_owner_id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        created_By: req.body.created_By,
        updated_By: req.body.updated_By,
    };

    Propery_owner.create(property_owner)
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


exports.findAll = (req, res) => {
  const property_owner_id = req.query.property_owner_id;
  var condition = property_owner_id ? { property_owner_id: { [Op.like]: `%${property_owner_id}%` } } : null;

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
    const property_owner_id = req.body.property_owner_id;

    Propery_owner.findByPk(property_owner_id)
        .then(data => {
            res.send(data);
        })

        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Property_owner with id=" + property_owner_id
            });
        });
};

exports.update = (req, res) => {
    const property_owner_id = req.body.property_owner_id;
  
    Propery_owner.update(req.body, {
      where: { property_owner_id: property_owner_id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: `Property_owner with property_owner_id = ${property_owner_id} was updated successfully.`
          });
        } else {
          res.send({
            message: `Cannot update Property_owner with property_owner_id=${property_owner_id}. Maybe Property_owner was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Property_owner with contractor_id=" + property_owner_id
        });
      });
  };

exports.delete = (req, res) => {
    const property_owner_id = req.body.property_owner_id;
  
    Propery_owner.destroy({
      where: { property_owner_id: property_owner_id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: `Property_owner with property_owner_id = ${property_owner_id} was deleted successfully!`
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

exports.deleteAll = (req, res) => {
  Propery_owner.destroy({
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
