import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import {MainPage} from "../pages/MainPage/MainPage";

import { ClientPage } from "../pages/ClientPage/Main/ClientPage";
import { NewClientPage } from "../pages/ClientPage/NewClient/NewClientPage";

import { PetPage } from "../pages/PetsPage/Main/PetPage"
import { NewPetPage } from "../pages/PetsPage/NewPet/NewPetPage";

import { EmployeesPage } from "../pages/EmployeesPage/Main/EmployeesPage";
import { NewEmployeePage } from "../pages/EmployeesPage/NewEmployee/NewEmployeePage";

import { ConsultationPage } from "../pages/ConsultationPage/Main/ConsultationPage";
import { NewConsultationPage } from "../pages/ConsultationPage/NewConsultation/NewConsultationPage";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Route component = { MainPage } path="/" exact></Route>
            <Route component={ ClientPage } path="/clientes"></Route>
            <Route component={ NewClientPage } path="/novo-cliente"></Route>
            <Route component={ PetPage } path="/pets"></Route>
            <Route component={ NewPetPage } path="/novo-pet"></Route>
            <Route component={ EmployeesPage } path="/funcionarios"></Route>
            <Route component={ NewEmployeePage } path="/novo-funcionario"></Route>
            <Route component={ ConsultationPage } path="/consultas"></Route>
            <Route component={ NewConsultationPage } path="/nova-consulta"></Route>
        </BrowserRouter>
    )
}