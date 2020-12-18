module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    user_id: {
      type: DataTypes.INTEGER,
      field: "user_id",
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      field: "email",
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      field: "type",
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
    modified_by: {
      type: DataTypes.STRING,
      field: "modified_by",
      allowNull: false
    }
  });
  return User;
};
