"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("pets", {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            nome: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            raca: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            dono_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "donos",
                    key: "id",
                },
                onUpdate:"CASCADE",
                onDelete:"CASCADE"
            }
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("pets");
    },
};
