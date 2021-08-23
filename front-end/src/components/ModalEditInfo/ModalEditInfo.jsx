import React from 'react';
import {Modal, Button, Backdrop, Fade} from '@material-ui/core/';
import EditIcon from '@material-ui/icons/Edit';
import { Form } from '../Form/Form';
import { useStyles } from "./ModalEditInfo.style";
import { Typography } from '@material-ui/core';


export default function ModalEditInfo(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen}>
      <EditIcon/>
      </Button>
      <Modal
        aria-labelledby="Edit info"
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
            <Typography className={classes.title}>Editar dados do(a) {props.name}</Typography>
            <Form className={classes.form} t1={props.t1} t2={props.t2} t3={props.t3}></Form>
            <div className={classes.divButton}>
              <Button className={classes.button} variant="contained">Cancelar</Button>
              <Button className={classes.button} variant="contained">Atualizar</Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
