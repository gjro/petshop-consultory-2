import React from "react"
import { SideBar } from "../../../components/SideBar/SideBar"
import { useStyles } from './EmployeesPage.style'
import { Box } from '../../../components/Box/Box'

export const EmployeesPage = () => {
    const style = useStyles();
    return (
    <div>
      <SideBar />
        <main className={style.content}>
        <div className={style.box}> 
          <Box title="Funcionários" th1="Nome" th2="CPF" th3="Cargo" new="novo-funcionario"/>
      </div>
      </main>
    </div>
  );
}
