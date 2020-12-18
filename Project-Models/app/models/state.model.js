module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define("state", {
    state_id: {
      type: DataTypes.INTEGER,
      field: "state_id",
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    state_name: {
      type: DataTypes.STRING,
      field: "state_name",
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
  return State;
};
