import React from 'react';
import {Modal, Button, Backdrop, Fade} from '@material-ui/core/';
import EditIcon from '@material-ui/icons/Edit';
import { Form } from '../Form/Form';
import { useStyles } from "./ModalDeleteInfo.style";
import { Typography } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


export default function ModalDeleteInfo(props) {
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
            <Typography className={classes.title}>Deletar dados do(a) {props.name}</Typography>
            <div className={classes.divButton}>
              <Button className={classes.button} variant="contained">Cancelar</Button>
              <Button className={classes.button} variant="contained">Deletar</Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
