module.exports = (sequelize, DataTypes) => {
  const Property_owner = sequelize.define("property_owner", {
    id: {
      type: DataTypes.INTEGER,
      field: "id",
      primaryKey: true,
      autoIncrement: true
    },
    fk_user_id: {
      type: DataTypes.INTEGER,
      field: "fk_user_id",
      DEFAULT: null
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
      type: DataTypes.INTEGER,
      field: "created_by",
      DEFAULT: null
    },
    updated_by: {
      type: DataTypes.INTEGER,
      field: "updated_by",
      DEFAULT: null
    }
  });
  return Property_owner;
};
