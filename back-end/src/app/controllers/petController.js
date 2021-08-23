import Pet from "../models/pet";

class petsControllers {
    //Listagem dos Pets
    async index(req, res) {
        const data = await Pet.findAll({
            limit: 1000,
        });

        res.json(data);
    }

    //Recuperar Pet
    async show(req, res) {
        try {
            const id = parseInt(req.params.id);
            const pet = await Pet.findByPk(id);
            const status = pet ? 200 : 404;

            return res.status(status).json(pet);
        } catch (e) {
            console.log("Error: " + e);
        }
    }

    //Criar Pet
    async create(req, res) {
        try {
            const { nome, dono_id, raca } = req.body;
            const novoPet = await Pet.create({
                nome,
                raca,
                dono_id,
            });

            return res.status(201).json(novoPet);
        } catch (e) {
            console.log("Error ao inserir: " + e);
        }
    }

    //Atualizar Pet
    async update(req, res) {
        try {
            const id = parseInt(req.params.id);
            const { nome, dono_id, raca } = req.body;

            const retornoStatus = id >= 0 ? 200 : 400;

            const pet = await Pet.findByPk(id);
            const novoPet = await pet.update({
                nome,
                raca,
                dono_id
            });

            return res.status(retornoStatus).json(novoPet);
        } catch (e) {
            console.log("Error: " + e);
        }
    }

    //Excluir Pet
    async destroy(req, res) {
        try {
            const id = parseInt(req.params.id);
            const pet = await Pet.findByPk(id);
            const status = id >= 0 ? 200 : 404;

            pet.destroy();

            return res.status(status);
        } catch (e) {
            console.log("Error: " + e);
        }
    }
}

export default new petsControllers();
