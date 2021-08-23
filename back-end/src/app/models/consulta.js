import Sequelize,{Model} from "sequelize";

class Consulta extends Model {
    static init(sequelize) {
        super.init(
            {
                custo: Sequelize.FLOAT,
            },
            {
                sequelize,
                tableName: 'consultas'
            }
        )
    }
    
    static associate(models){
        this.belongsTo(models.Funcionario, {foreignKey: "funcionario_id"}) 
        this.belongsTo(models.Pet, {foreignKey:"pet_id"}) 
    }
}

export default Consulta;