module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        // id: {
        //     primaryKey: true,
        //     type: Sequelize.INT
        // },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        role: {
            type: Sequelize.STRING
        },
        // createdAt: {
        //     type: Sequelize.STRING
        // },
        // updatedAt: {
        //     type: Sequelize.STRING
        // }
    });

    return User;
};