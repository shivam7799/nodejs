module.exports = (sequelize, DataTypes) => {
  const Backend_user = sequelize.define("backend_user", {
    backend_user_id: {
      type: DataTypes.INTEGER,
      field: "backend_user_id",
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
  return Backend_user;
};
