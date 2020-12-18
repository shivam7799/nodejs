module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define("city", {
    city_id: {
      type: DataTypes.INTEGER,
      field: "city_id",
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    city_name: {
      type: DataTypes.STRING,
      field: "city_name",
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
  return City;
};
