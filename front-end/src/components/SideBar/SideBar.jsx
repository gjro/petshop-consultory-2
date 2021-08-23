import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar'; 
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PetsIcon from '@material-ui/icons/Pets';
import PersonIcon from '@material-ui/icons/Person';
import LocalHospitalSharpIcon from '@material-ui/icons/LocalHospitalSharp';
import GroupSharpIcon from '@material-ui/icons/GroupSharp';
import { Link } from "react-router-dom";

import logo from '../../_assets/icons/logo.svg'
import {useStyles} from './SideBar.style'
import { Button } from '@material-ui/core';


export const SideBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}/>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.header}>
          <Button component={Link} to={'/'}>
            <img className={classes.icon} src={logo} alt="logo"></img>
            <Typography><div>DSW</div>PetShop</Typography>
          </Button>
        </div>

        <Divider />
        <List>
            <ListItem button component={Link} to={'/clientes'}>
              <ListItemIcon><PersonIcon /> </ListItemIcon>
                <ListItemText>Clientes</ListItemText>
            </ListItem>
            <ListItem button component={Link} to={'/pets'}>
              <ListItemIcon><PetsIcon/> </ListItemIcon>
              <ListItemText>Pets</ListItemText>
            </ListItem>
            <ListItem button component={Link} to={'/funcionarios'}>
              <ListItemIcon><GroupSharpIcon /> </ListItemIcon>
              <ListItemText>Funcionários</ListItemText>
            </ListItem>
            <ListItem button component={Link} to={'/consultas'}>
              <ListItemIcon><LocalHospitalSharpIcon /> </ListItemIcon>
              <ListItemText>Consultas</ListItemText>
            </ListItem>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
}
