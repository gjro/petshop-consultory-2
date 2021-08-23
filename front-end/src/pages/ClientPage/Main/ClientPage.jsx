import React from "react"
import { SideBar } from "../../../components/SideBar/SideBar"
import { useStyles } from './ClientPage.style'
import { Box } from '../../../components/Box/Box'

export const ClientPage = () => {
    const style = useStyles();
    return (
    <div>
      <SideBar />
        <main className={style.content}>
        <div className={style.box}> 
          <Box title="Clientes" th1="Nome" th2="CPF" th3="Telefone" new="novo-cliente"/>
      </div>
      </main>
    </div>
  );
}
