module.exports = (sequelize,DataTypes) => {
    const Backend_user = sequelize.define("backend_user", {
        backend_user_id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        backend_user_first_name : {
            type: DataTypes.STRING,
            allowNull: false
        },
        backend_user_last_name : {
            type: DataTypes.STRING,
            allowNull: false
        },
        created_By: {
            type: DataTypes.STRING,
            allowNull: false
        },
        updated_By: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
    return Backend_user;
};