import React from "react"
import { SideBar } from "../../../components/SideBar/SideBar"
import { useStyles } from './ConsultationPage.style'
import { Box } from '../../../components/Box/Box'
import api from '../../../services/api'

export const ConsultationPage = () => {
  const style = useStyles();

  const [consulta, setConsultation] = React.useState([]);

  async function apiGet() {
    await api
      .get("/consultas")
      .then((response) => setConsultation(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  React.useEffect(apiGet, []);

  return (
    <div>
      <SideBar />
      <main className={style.content}>
        <div className={style.box}>
          <Box title="Consultas" th1="Pet" th2="Funcionário" th3="Custo" new="nova-consulta" data={consulta} entity="consultation" />
        </div>
      </main>
    </div>
  );
}
