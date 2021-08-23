import React from "react"
import { SideBar } from "../../../components/SideBar/SideBar"
import { useStyles } from './PetPage.style'
import { Box } from '../../../components/Box/Box'
import api from '../../../services/api'

export const PetPage = () => {
  const style = useStyles();

  const [pet, setPet] = React.useState([]);

  async function apiGet() {
    await api
      .get("/pets/")
      .then((response) => setPet(response.data))
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
          <Box title="Pets" th1="Nome" th2="Dono" th3="Raça" new="novo-pet" data={pet} entity="pet" />
        </div>
      </main>
    </div>
  );
}
