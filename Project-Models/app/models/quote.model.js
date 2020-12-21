module.exports = (sequelize, DataTypes) => {
  const Quote = sequelize.define("quote", {
    quote_id: {
      type: DataTypes.INTEGER,
      field: "quote_id",
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    quote_description: {
      type: DataTypes.STRING,
      field: "quote_description",
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
  return Quote;
};
