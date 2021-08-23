import React from "react"
import { Create } from "../../../components/Create/Create";
import { SideBar } from "../../../components/SideBar/SideBar"
import { useStyles } from './NewPetPage.style'


export const NewPetPage = () => {
    const style = useStyles();
    return (
    <div>
      <SideBar />
      <main className={style.content}>
        <div className={style.box}> 
        <Create t1="Nome" t2="Dono" t3="Raça" t4="Cadastrar novo pet"></Create>
      </div>
      </main>
    </div>
  );
}
