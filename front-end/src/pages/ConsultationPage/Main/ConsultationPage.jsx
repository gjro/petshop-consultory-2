import React from "react"
import { SideBar } from "../../../components/SideBar/SideBar"
import { useStyles } from './ConsultationPage.style'
import { Box } from '../../../components/Box/Box'

export const ConsultationPage = () => {
    const style = useStyles();
    return ( 
    <div>
      <SideBar />
        <main className={style.content}>
        <div className={style.box}> 
          <Box title="Consultas" th1="Pet" th2="Funcionário" th3="Custo" new="nova-consulta"/>
      </div>
      </main>
    </div>
  );
}
