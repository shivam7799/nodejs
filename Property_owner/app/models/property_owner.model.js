module.exports = (sequelize, DataTypes) => {
    const Property_owner = sequelize.define("property_owner", {
        property_owner_id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        first_name : {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name : {
            type: DataTypes.STRING,
            allowNull: false
        },
        created_By: {
            allowNull: false,
            type: DataTypes.STRING
        },
        updated_By: {
            allowNull: false,
            type: DataTypes.STRING
        },     
    });
    return Property_owner;
};

