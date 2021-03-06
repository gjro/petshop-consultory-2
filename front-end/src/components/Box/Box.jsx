import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Button,
} from "@material-ui/core/";
import { BoxHeader } from "../BoxHeader/BoxHeader";
import ModalEditInfo from "../ModalEditInfo/ModalEditInfo";
import ModalDeleteInfo from "../ModalDeleteInfo/ModalDeleteInfo";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
	root: {
		marginLeft: "50px",
		marginRight: "50px",
		height: "93vh",
	},
});

function createData(id, name, cpf, telefone) {
	return { id, name, cpf, telefone };
}

export const Box = (props) => {
	const classes = useStyles();
	const rows = [];

	if (props.entity == "cliente") {
		props.data.map((element) =>
			rows.push(
				createData(
					element.id,
					element.nome,
					element.cpf,
					element.telefone
				)
			)
		);
	} else if (props.entity == "pet") {
		props.data.map((element) =>
			rows.push(
				createData(
					element.id,
					element.nome,
					element.dono_id,
					element.raca
				)
			)
		);
	} else if (props.entity == "funcionario") {
		props.data.map((element) =>
			rows.push(
				createData(element.id, element.nome, element.cpf, element.cargo)
			)
		);
	} else if (props.entity == "consulta") {
		props.data.map((element) =>
			rows.push(
				createData(
					element.id,
					element.pet_id,
					element.funcionario_id,
					element.custo
				)
			)
		);
	}

	return (
		<div className={classes.root}>
			<BoxHeader title={props.title} button new={props.new} />
			<TableContainer component={Paper}>
				<Table
					className={classes.table}
					size="small"
					aria-label="Clientes"
				>
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell align="right">{props.th1}</TableCell>
							<TableCell align="right">{props.th2}</TableCell>
							<TableCell align="right">{props.th3}</TableCell>
							<TableCell align="right"></TableCell>
							<TableCell align="right"></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.id}>
								<TableCell component="th" scope="row">
									{row.id}
								</TableCell>
								<TableCell align="right">{row.name}</TableCell>
								<TableCell align="right">{row.cpf}</TableCell>
								<TableCell align="right">
									{row.telefone}
								</TableCell>
								<TableCell align="right">
									<Button>
										<ModalEditInfo
											name={row.name}
											t1={props.th1}
											t2={props.th2}
											t3={props.th3}
											id={row.id}
											entity={props.entity}
										/>
									</Button>
								</TableCell>
								<TableCell align="left">
									<Button>
										<ModalDeleteInfo
											name={row.name}
											id={row.id}
											entity={props.entity}
										/>
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};
