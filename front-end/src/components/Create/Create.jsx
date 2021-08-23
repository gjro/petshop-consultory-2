import { Button, Divider, Typography } from "@material-ui/core"
import { BoxHeader } from "../BoxHeader/BoxHeader"
import { Form } from "../Form/Form";
import { useStyles } from "./Create.style";

export const Create = (props) => {
  const style = useStyles();

    return(
        <div className={style.root}>
        <BoxHeader title={props.t4}></BoxHeader>
        <Divider/>
          <div className={style.form}>
            <Typography className={style.title}>Dados de cadastro:</Typography>
            <Form t1={props.t1} t2={props.t2} t3={props.t3}></Form>
            <Button className={style.button} variant="contained">Cadastrar</Button>
          </div>

        </div>
      
    );
}