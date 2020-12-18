module.exports = (sequelize, DataTypes) => {
  const Property_Address = sequelize.define("property_address", {
    property_address_id: {
      type: DataTypes.INTEGER,
      field: "property_address_id",
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    street_1: {
      type: DataTypes.STRING,
      field: "street_1",
      allowNull: false
    },
    street_2: {
      type: DataTypes.STRING,
      field: "street_2",
      allowNull: false
    },
    postal_code: {
      type: DataTypes.STRING,
      field: "postal_code",
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      field: "created_at"
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "updated_at"
    },
    created_by: {
      type: DataTypes.STRING,
      field: "created_by",
      allowNull: false
    },
    updated_by: {
      type: DataTypes.STRING,
      field: "updated_by",
      allowNull: false
    }
  });
  return Property_Address;
};
