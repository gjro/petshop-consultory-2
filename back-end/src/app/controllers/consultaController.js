import Consulta from "../models/consulta";

class consultaControllers {
    //Listagem das Consultas
    async index(req, res) {
        const data = await Consulta.findAll({
            limit: 1000,
        });

        res.json(data);
    }

    //Recuperar Consulta
    async show(req, res) {
        try {
            const id = parseInt(req.params.id);
            const consulta = await Consulta.findByPk(id);
            const status = consulta ? 200 : 404;

            return res.status(status).json(consulta);
        } catch (e) {
            console.log("Error: " + e);
        }
    }

    //Criar Consulta
    async create(req, res) {
        try {
            const { pet_id, funcionario_id, custo } = req.body;
            const novaConsulta = await Consulta.create({
                pet_id,
                funcionario_id,
                custo,
            });

            return res.status(201).json(novaConsulta);
        } catch (e) {
            console.log("Error ao inserir: " + e);
        }
    }

    //Atualizar Consulta
    async update(req, res) {
        try {
            const id = parseInt(req.params.id);
            const { pet_id, funcionarios_id, custo } = req.body;

            const retornoStatus = id >= 0 ? 200 : 400;

            const consulta = await Consulta.findByPk(id);
            const novaConsulta = await consulta.update({
                pet_id,
                funcionarios_id,
                custo,
            });

            return res.status(retornoStatus).json(novaConsulta);
        } catch (e) {
            console.log("Error: " + e);
        }
    }

    //Excluir Dono
    async destroy(req, res) {
        try {
            const id = parseInt(req.params.id);
            const consulta = await Consulta.findByPk(id);
            const status = id >= 0 ? 200 : 404;

            consulta.destroy();

            return res.status(status);
        } catch (e) {
            console.log("Error: " + e);
        }
    }
}

export default new consultaControllers();
