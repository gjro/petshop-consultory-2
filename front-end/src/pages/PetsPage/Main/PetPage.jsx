import React from "react"
import { SideBar } from "../../../components/SideBar/SideBar"
import { useStyles } from './PetPage.style'
import { Box } from '../../../components/Box/Box'

export const PetPage = () => {
    const style = useStyles();
    return (
    <div>
      <SideBar />
        <main className={style.content}>
        <div className={style.box}> 
          <Box title="Pets" th1="Nome" th2="Dono" th3="Raça" new="novo-pet"/>
      </div>
      </main>
    </div>
  );
}
