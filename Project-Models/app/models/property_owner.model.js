module.exports = (sequelize, DataTypes) => {
  const Property_owner = sequelize.define("property_owner", {
    property_owner_id: {
      type: DataTypes.INTEGER,
      field: "property_owner_id",
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    first_name: {
      type: DataTypes.STRING,
      field: "first_name",
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      field: "last_name",
      allowNull: false
    },
    mobile: {
      type: DataTypes.BIGINT,
      field: "mobile",
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
  return Property_owner;
};
