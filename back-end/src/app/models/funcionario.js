import Sequelize,{Model} from "sequelize";

class Funcionario extends Model {
    static init(sequelize){
        super.init(
            {
                nome: Sequelize.STRING,
                cpf: Sequelize.STRING,
                cargo: Sequelize.STRING,
                
            },
            {
                sequelize,
            }
        )
    }
    static associate(models){
        this.hasMany(models.Consulta);
    }
}

export default Funcionario;