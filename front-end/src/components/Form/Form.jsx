import {
	FormControl,
	InputLabel,
	OutlinedInput,
	Button,
} from "@material-ui/core";
import { useStyles } from "./Form.style";
import React from "react";
import api from "../../services/api";

export const Form = (props) => {
	const classes = useStyles();
	const [formRow1, setFormRow1] = React.useState("");
	const [formRow2, setFormRow2] = React.useState("");
	const [formRow3, setFormRow3] = React.useState("");

	function handleChangeR1(event) {
		setFormRow1(event.target.value);
	}
	function handleChangeR2(event) {
		setFormRow2(event.target.value);
	}
	function handleChangeR3(event) {
		setFormRow3(event.target.value);
	}

	function apiPost(row1, row2, row3) {
		switch (props.entity) {
			case "cliente":
				api.post("/donos", {
					nome: row1,
					cpf: row2,
					telefone: row3,
				})
					.then(function (response) {
						console.log(response);
					})
					.catch((err) => {
						console.error("ops! ocorreu um erro" + err);
					});
				break;

			case "pet":
				api.post("/pets", {
					nome: row1,
					dono_id: row2,
					raca: row3,
				})
					.then(function (response) {
						console.log(response);
					})
					.catch((err) => {
						console.error("ops! ocorreu um erro" + err);
					});
				break;

			case "funcionario":
				api.post("/funcionarios", {
					nome: row1,
					cpf: row2,
					cargo: row3,
				})
					.then(function (response) {
						console.log(response);
					})
					.catch((err) => {
						console.error("ops! ocorreu um erro" + err);
					});
				break;

			case "consulta":
				api.post("/consultas", {
					pet_id: row1,
					funcionario_id: row2,
					custo: parseFloat(row3),
				})
					.then(function (response) {
						console.log(response);
					})
					.catch((err) => {
						console.error("ops! ocorreu um erro" + err);
					});
				break;
		}
	}

	function apiUpdate(row1, row2, row3) {
		switch (props.entity) {
			case "cliente":
				api.put("/donos/" + props.id, {
					nome: row1,
					cpf: row2,
					telefone: row3,
				})
					.then(function (response) {
						console.log(response);
					})
					.catch((err) => {
						console.error("ops! ocorreu um erro" + err);
					});
				break;

			case "pet":
				api.put("/pets", {
					nome: row1,
					dono_id: row2,
					raca: row3,
				})
					.then(function (response) {
						console.log(response);
					})
					.catch((err) => {
						console.error("ops! ocorreu um erro" + err);
					});
				break;

			case "funcionario":
				api.put("/funcionarios", {
					nome: row1,
					cpf: row2,
					cargo: row3,
				})
					.then(function (response) {
						console.log(response);
					})
					.catch((err) => {
						console.error("ops! ocorreu um erro" + err);
					});
				break;

			case "consulta":
				api.put("/consultas", {
					pet_id: row1,
					funcionario_id: row2,
					custo: parseFloat(row3),
				})
					.then(function (response) {
						console.log(response);
					})
					.catch((err) => {
						console.error("ops! ocorreu um erro" + err);
					});
				break;
		}
	}

	async function handleSubmit() {
		if (props.requisition == "create") {
			await apiPost(formRow1, formRow2, formRow3);
		} else {
			await apiUpdate(formRow1, formRow2, formRow3);
		}
	}
	return (
		<div className={classes.root}>
			<FormControl variant="outlined" margin="normal">
				<InputLabel htmlFor="name">{props.t1}</InputLabel>
				<OutlinedInput
					onChange={handleChangeR1}
					id="name"
					labelWidth={50}
				/>
			</FormControl>
			<FormControl variant="outlined" margin="normal">
				<InputLabel htmlFor="cpf">{props.t2}</InputLabel>
				<OutlinedInput
					onChange={handleChangeR2}
					id="cpf"
					labelWidth={50}
				/>
			</FormControl>
			<FormControl variant="outlined" margin="normal">
				<InputLabel htmlFor="telefone">{props.t3}</InputLabel>
				<OutlinedInput
					onChange={handleChangeR3}
					id="telefone"
					labelWidth={70}
				/>
			</FormControl>
			<Button
				className={classes.button}
				variant="contained"
				onClick={handleSubmit}
			>
				Cadastrar
			</Button>
		</div>
	);
};
