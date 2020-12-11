module.exports = (sequelize,DataTypes) => {
    const Contractor = sequelize.define("contractor",{
        contractor_id : {
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
        license_number : {
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
    return Contractor;
};



