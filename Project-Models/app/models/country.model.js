module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define("country", {
    country_id: {
      type: DataTypes.INTEGER,
      field: "country_id",
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    country_code: {
      type: DataTypes.INTEGER,
      field: "country_code",
      allowNull: false
    },
    country_name: {
      type: DataTypes.STRING,
      field: "country_name",
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
  return Country;
};
