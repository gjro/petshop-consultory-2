import React from "react"
import { SideBar } from "../../../components/SideBar/SideBar"
import { useStyles } from './EmployeesPage.style'
import { Box } from '../../../components/Box/Box'
import api from "../../../services/api";

export const EmployeesPage = () => {
  const [employee, setEmployee] = React.useState([]);

  async function apiGet() {
    await api
      .get("/funcionarios")
      .then((response) => setEmployee(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }

  React.useEffect(apiGet, []);



  const style = useStyles();
  return (
    <div>
      <SideBar />
      <main className={style.content}>
        <div className={style.box}>
          <Box title="Funcionários" th1="Nome" th2="CPF" th3="Cargo" new="novo-funcionario" data={employee}
            entity="employee" />
        </div>
      </main>
    </div>
  );
}
