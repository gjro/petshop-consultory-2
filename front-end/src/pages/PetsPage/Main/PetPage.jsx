import React from "react"
import { SideBar } from "../../../components/SideBar/SideBar"
import { useStyles } from './PetPage.style'
import { Box } from '../../../components/Box/Box'
import api from '../../../services/api'

export const PetPage = () => {
  const style = useStyles();

  const [pet, setPet] = React.useState([]);
  const [owner, setOwner] = React.useState([]);
  async function apiGet() {
    await api
      .get("/pets/")
      .then((response) => setPet(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  async function apiGetId() {
    await api
      .get("/donos/")
      .then((response) => setOwner(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });

  }

  // async function aa() {
  //   await pet.map((element) => {
  //     console.log('entrou');
  //     const { nome } = apiGetId(element.dono);
  //     element.dono = nome;
  //     console.log("owners ->", owner)
  //   })
  // }


  // function getOwnerName() {
  //   pet.map(async (element) => {
  //     console.log('entrou');
  //     const { nome } = await apiGetId(element.dono_id);
  //     element.dono = nome;
  //     console.log("owners ->", owner)
  //   })
  // }

  React.useEffect(apiGet, []);
  React.useEffect(apiGetId, []);






  return (
    < div >
      <SideBar />
      <main className={style.content}>
        <div className={style.box}>
          <Box title="Pets" th1="Nome" th2="Dono" th3="Raça" new="novo-pet" data={pet} dataOwner={owner} entity="pet" />
        </div>
      </main>
    </div >
  );
}
