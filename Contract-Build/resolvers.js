const db = require("./app/models");
const Contractors = db.contractors;
const Users = db.users;
const Backend_users = db.backend_users;
const Property_owners = db.property_owners;
const Property_Types = db.property_types;
const Property_Sub_Types = db.property_sub_types;
const Countries = db.countries;
const States = db.states;
const Op = db.Sequelize.Op;

Users.findAll()
  .then(data => {
    return data;
  })
  .catch(err => {
    return err;
  });

Users.findByPk()
  .then(data => {
    return data;
  })
  .catch(err => {
    return err;
  });

Contractors.findByPk()
  .then(data => {
    return data;
  })
  .catch(err => {
    return err;
  });

Contractors.findAll()
  .then(data => {
    return data;
  })
  .catch(err => {
    return err;
  });

Backend_users.findAll()
  .then(data => {
    return data;
  })
  .catch(err => {
    return err;
  });

Backend_users.findByPk()
  .then(data => {
    return data;
  })
  .catch(err => {
    return err;
  });

Property_owners.findAll()
  .then(data => {
    return data;
  })
  .catch(err => {
    return err;
  });

Property_owners.findByPk()
  .then(data => {
    return data;
  })
  .catch(err => {
    return err;
  });

Property_Types.findAll()
  .then(data => {
    return data;
  })
  .catch(err => {
    return err;
  });

Property_Types.findByPk()
  .then(data => {
    return data;
  })
  .catch(err => {
    return err;
  });

Property_Sub_Types.findAll()
  .then(data => {
    return data;
  })
  .catch(err => {
    return err;
  });

Property_Sub_Types.findByPk()
  .then(data => {
    return data;
  })
  .catch(err => {
    return err;
  });

Countries.findAll()
  .then(data => {
    return data;
  })
  .catch(err => {
    return err;
  });

Countries.findByPk()
  .then(data => {
    return data;
  })
  .catch(err => {
    return err;
  });

States.findAll()
  .then(data => {
    return data;
  })
  .catch(err => {
    return err;
  });

States.findByPk()
  .then(data => {
    return data;
  })
  .catch(err => {
    return err;
  });

const Query = {
  user: (root, { id }) => Users.findByPk(id),
  users: () => Users.findAll(),
  contractor: (root, { id }) => Contractors.findByPk(id),
  contractors: () => Contractors.findAll(),
  backend_user: (root, { id }) => Backend_users.findByPk(id),
  backend_users: () => Backend_users.findAll(),
  property_owner: (root, { id }) => Property_owners.findByPk(id),
  property_owners: () => Property_owners.findAll(),
  property_type: (root, { id }) => Property_Types.findByPk(id),
  property_types: () => Property_Types.findAll(),
  property_sub_type: (root, { id }) => Property_Sub_Types.findByPk(id),
  property_sub_types: () => Property_Sub_Types.findAll(),
  country: (root, { id }) => Countries.findByPk(id),
  countries: () => Countries.findAll(),
  state: (root, { id }) => States.findByPk(id),
  states: () => States.findAll()
};

const User = {
  contractors: user => {
    Contractors.findAll().find(contractor => contractor.id === user.id);
  },
  backend_users: user => {
    Backend_users.findAll().find(backend_user => backend_user.id === user.id);
  },
  property_owners: user => {
    Property_owners.findAll().find(
      property_owner => property_owner.id === user.id
    );
  }
};

const Property_Type = {
  property_sub_types: property_type => {
    Property_Sub_Types.findAll(
      property_sub_type => property_sub_type.id === property_type.id
    );
  }
};

const Contractor = {
  user: contractor => Users.findByPk(contractor.id)
};

const Backend_user = {
  user: backend_user => Users.findByPk(backend_user.id)
};

const Property_owner = {
  user: property_owner => Users.findByPk(property_owner.id)
};

const Property_Sub_Type = {
  property_type: property_sub_type =>
    Property_Types.findByPk(property_sub_type.id)
};

const Country = {
  states: country => {
    States.findAll().find(country => states.id === country.id);
  }
};

module.exports = {
  Query,
  User,
  Contractor,
  Backend_user,
  Property_owner,
  Property_Type,
  Property_Sub_Type,
  Country
};
