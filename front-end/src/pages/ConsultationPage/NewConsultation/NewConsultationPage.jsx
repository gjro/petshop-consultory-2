import React from "react"
import { Create } from "../../../components/Create/Create";
import { SideBar } from "../../../components/SideBar/SideBar"
import { useStyles } from './NewConsultationPage.style'


export const NewConsultationPage = () => {
    const style = useStyles();
    return (
    <div>
      <SideBar />
      <main className={style.content}>
        <div className={style.box}> 
        <Create t1="Pet" t2="Funcionario" t3="Custo" t4="Cadastrar nova consulta"></Create>
      </div>
      </main>
    </div>
  );
}
