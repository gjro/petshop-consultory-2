import React from "react";
import { SideBar } from "../../../components/SideBar/SideBar";
import { useStyles } from "./ClientPage.style";
import { Box } from "../../../components/Box/Box";
import api from "../../../services/api";

export const ClientPage = () => {
	const [client, setClient] = React.useState([]);

	async function apiGet() {
		await api
			.get("/donos")
			.then((response) => setClient(response.data))
			.catch((err) => {
				console.error("ops! ocorreu um erro" + err);
			});
		console.log(client);
	}

	React.useEffect(apiGet, []);

	///console.log(client)

	const style = useStyles();
	return (
		<div>
			<SideBar />
			<main className={style.content}>
				<div className={style.box}>
					<Box
						title="Clientes"
						th1="Nome"
						th2="CPF"
						th3="Telefone"
						new="novo-cliente"
						data={client}
						entity="cliente"
					/>
				</div>
			</main>
		</div>
	);
};
