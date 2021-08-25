import { FormControl, InputLabel, OutlinedInput, Button } from "@material-ui/core"
import { useStyles } from "./Form.style"
import React from "react";
import api from "../../services/api";

export const Form = (props) => {
  const classes = useStyles();
  const [formRow1, setFormRow1] = React.useState('')
  const [formRow2, setFormRow2] = React.useState('')
  const [formRow3, setFormRow3] = React.useState('')

  function handleChangeR1(event) {
    setFormRow1(event.target.value);
  }
  function handleChangeR2(event) {
    setFormRow2(event.target.value);
  }
  function handleChangeR3(event) {
    setFormRow3(event.target.value);
  }

  function apiPost(data) {
    console.log('antes', data)
    api
      .post("/donos", data)
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
    console.log('depois', data)
  }

  async function handleSubmit(event) {
    let nome = formRow1;
    let cpf = formRow2;
    let telefone = formRow3;

    const data = {
      nome,
      cpf,
      telefone
    }

    await apiPost(JSON.stringify(data));
    event.preventDefault();
  }
  return (
    <div className={classes.root}>
      <FormControl variant="outlined" margin="normal">
        <InputLabel htmlFor="name" >{props.t1}</InputLabel>
        <OutlinedInput onChange={handleChangeR1}
          id="name"
          labelWidth={50}
        />
      </FormControl>
      <FormControl variant="outlined" margin="normal">
        <InputLabel htmlFor="cpf">{props.t2}</InputLabel>
        <OutlinedInput onChange={handleChangeR2}
          id="cpf"
          labelWidth={50}
        />
      </FormControl>
      <FormControl variant="outlined" margin="normal">
        <InputLabel htmlFor="telefone">{props.t3}</InputLabel>
        <OutlinedInput onChange={handleChangeR3}
          id="telefone"
          labelWidth={70}
        />
      </FormControl>
      <Button className={classes.button} variant="contained" onClick={handleSubmit}>Cadastrar</Button>
    </div>
  );
}