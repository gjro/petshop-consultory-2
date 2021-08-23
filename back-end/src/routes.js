import { Router } from "express";

import consultas from "./app/controllers/consultaController";
import donos from "./app/controllers/donoController";
import funcionarios from "./app/controllers/funcionarioController";
import pets from "./app/controllers/petController";

const routes = Router();

//Dono

routes.get("/donos/:id", donos.show);
routes.get("/donos", donos.index);
routes.post("/donos", donos.create);
routes.put("/donos/:id", donos.update);
routes.delete("/donos/:id", donos.destroy);

//Pet

routes.get("/pets/:id", pets.show);
routes.get("/pets", pets.index);
routes.post("/pets", pets.create);
routes.put("/pets/:id", pets.update);
routes.delete("/pets/:id", pets.destroy);

//Funcionarios

routes.get("/funcionarios/:id", funcionarios.show);
routes.get("/funcionarios", funcionarios.index);
routes.post("/funcionarios", funcionarios.create);
routes.put("/funcionarios/:id", funcionarios.update);
routes.delete("/funcionarios/:id", funcionarios.destroy);

//Consultas

routes.get("/consultas/:id", consultas.show);
routes.get("/consultas", consultas.index);
routes.post("/consultas", consultas.create);
routes.put("/consultas/:id", consultas.update);
routes.delete("/consultas/:id", consultas.destroy);

export default routes;
