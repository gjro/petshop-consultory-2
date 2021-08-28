import React from "react";
import { Modal, Button, Backdrop, Fade } from "@material-ui/core/";
import EditIcon from "@material-ui/icons/Edit";
import { Form } from "../Form/Form";
import { useStyles } from "./ModalDeleteInfo.style";
import { Typography } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import api from "../../services/api";

export default function ModalDeleteInfo(props) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	function apiDelete(id) {
		console.log(props.entity);
		switch (props.entity) {
			case "cliente":
				api.delete("/donos/" + id)
					.then(function (response) {
						console.log(response);
					})
					.catch((err) => {
						console.error("ops! ocorreu um erro" + err);
					});
				break;

			case "pet":
				api.delete("/pets/" + id)
					.then(function (response) {
						console.log(response);
					})
					.catch((err) => {
						console.error("ops! ocorreu um erro" + err);
					});
				break;

			case "funcionario":
				api.delete("/funcionarios/" + id)
					.then(function (response) {
						console.log(response);
					})
					.catch((err) => {
						console.error("ops! ocorreu um erro" + err);
					});
				break;

			case "consulta":
				api.delete("/consultas/" + id)
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
		console.log(props.id);
		await apiDelete(props.id);
	}

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button onClick={handleOpen}>
				<DeleteForeverIcon />
			</Button>
			<Modal
				aria-labelledby="Delete info"
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<div className={classes.paper}>
						<Typography className={classes.title}>
							Deletar dados do(a) {props.name}
						</Typography>
						<div className={classes.divButton}>
							<Button
								className={classes.button}
								variant="contained"
							>
								Cancelar
							</Button>
							<Button
								className={classes.button}
								variant="contained"
								onClick={handleSubmit}
							>
								Deletar
							</Button>
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}
