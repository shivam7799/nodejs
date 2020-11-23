const Customer = require('../models/customer.model.js');

//Create and save a new Customer
exports.create = (req, res) => {

};

//Retrieve all Customers from the database
exports.findAll = (req, res) => {

};

//Find a single Customer with customerId
exports.findOne = (req, res) => {

};

//Update a Customer identified by the customerId in the request
exports.update = (req, res) => {

}

//Delete a Customer with the specified customerId in the request
exports.delete = (req, res) => {

};

//Delete all Customers from the database
exports.deleteAll = (req, res) => {

};

//Create a new Object
//Create and save a Customer

exports.create = (req, res) => {
    //Validate request
    if(!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    //Create a Customer
    const customer = new Customer({
        email: req.body.email,
        name: req.body.name,
        active: req.body.active
    }); 

    //Save Customer in database.
    Customer.create(customer, (err, data) => {
        if(err)
            res.status(500).send({
                message:
                    err.message || "Some error occured while creating the customer."
            });
        else res.send(data);
    });
};

//Retrieve all Objects
//Find a single customer with customerId:

exports.findOne = (req, res) => {
    Customer.findById(req.params.customerId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Customer with id ${req.params.customerId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Customer with id " + req.params.customerId
          });
        }
      } else res.send(data);
    });
  };

  //Update an Object
  //Update a Customer identified by the customerId in the request

  exports.update = (req, res) => {
      //Validate request
      if(!req.body){
          req.status(400).send({
              message: "Content can not be empty!"
          });
      }

      Customer.updateById(
          req.params.customerId,
          new Customer(req.body),
          (err,data) => {
              if(err){
                  if(err.kind === "not_found"){
                      res.status(404).send({
                          message: `Not found Customer with id ${req.params.customerId}.`
                      });
                  } else {
                      res.status(500).send({
                          message:"Error updating Customer with id " + req.params.customerId
                      });
                  }
              } else res.send(data);
          }
      );
  };

  //Delete an Object
  //Delete a Customer with the specified customerId in a request

  exports.delete = (req, res) => {
      Customer.remove(req.params.customerId, (err, data) => {
          if(err){
              if(err.kind === "not_found"){
                  res.status(404).send({
                      message: `Not found Customer with id ${req.params.customerId}.`
                  });
              } else{
                  res.status(500).send({
                      message : "Could not delete Customer with id " + req.params.customerId
                  });
              }
          } else res.send({message: `Customer was deleted successfully!`});
      });
  };

  //Delete all Objects
  //Delete all Customers from database.
  
  exports.deleteAll = (req, res) => {
      Customer.removeAll((err,data) => {
          if(err)
            res.status(500).send({
                message:
                    err.message || "Some error occured while removing all Customers."
            });
            else res.send({message: `All Customers were deleted successfully.`})
      });
  };