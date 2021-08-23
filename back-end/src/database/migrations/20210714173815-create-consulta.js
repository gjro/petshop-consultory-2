"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("consultas", {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },            
            custo:{
              type:Sequelize.FLOAT,
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
            pet_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "pets",
                    key: "id",
                },
                onUpdate:"CASCADE",
                onDelete:"CASCADE"
            },
            funcionario_id: {
              type: Sequelize.INTEGER,
              allowNull: false,
              references: {
                  model: "funcionarios",
                  key: "id",
              },
              onUpdate:"CASCADE",
              onDelete:"CASCADE"
            }
        },
        {
            freezeTableName: true,
            tableName: "consultas"
        }
        
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("consultas");
    },
};
