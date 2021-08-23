import React from "react"
import { SideBar } from "../../components/SideBar/SideBar"
import { useStyles } from './MainPage.style'


export const MainPage = () => {
    const style = useStyles();
    return (
    <div>
      <SideBar />
    </div>
  );
}
