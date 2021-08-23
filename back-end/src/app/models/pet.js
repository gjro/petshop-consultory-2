import Sequelize, { Model } from "sequelize";

class Pet extends Model {
    static init(sequelize) {
        super.init(
            {
                nome: Sequelize.STRING,
                raca: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
    }
    
    static associate(models){
        this.belongsTo(models.Dono, { foreignKey: "dono_id" })
        this.hasMany(models.Consulta);
    }
}

export default Pet;
