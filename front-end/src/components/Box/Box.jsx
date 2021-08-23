import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, TableRow, 
  Paper, 
  Button}
  from '@material-ui/core/';
import { BoxHeader } from '../BoxHeader/BoxHeader';
import ModalEditInfo from '../ModalEditInfo/ModalEditInfo';
import ModalDeleteInfo from "../ModalDeleteInfo/ModalDeleteInfo";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  root:{
    marginLeft:"50px",
    marginRight:"50px",
    height: "93vh",
  }
});

function createData(id, name, cpf, telefone) {
  return { id, name, cpf, telefone};
}

const rows = [
  createData('01', 'Chico', '000.111.222-33', '(00)9 1111-222' ),
  createData('02', 'Luana', '000.111.222-33', '(00)9 1111-222' ),
  createData('03', 'Moisés', '000.111.222-33', '(00)9 1111-222' ),
  createData('04', 'Maria', '000.111.222-33', '(00)9 1111-222' ),
];

export const Box = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <BoxHeader title={props.title} button new={props.new}/>
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="Clientes">
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
              <TableCell align="right">{row.telefone}</TableCell>
              <TableCell align='right'>
                  <Button>
                    <ModalEditInfo name={row.name} t1={props.th1} t2={props.th2} t3={props.th3}/>
                  </Button>
              </TableCell>
              <TableCell align='left'>
                <Button>
                  <ModalDeleteInfo name={row.name}/>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
