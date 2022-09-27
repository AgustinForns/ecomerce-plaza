import React, {useState, useEffect} from "react"
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";
import { useContext } from "react"
import { contexto } from "./CartContext";


export default function NavBar(){
    
    return( <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
              
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Bienvenido a Plaza!
            </Typography>
            <Button color="inherit"><Link to="/"> Home </Link></Button>
            <Button color="inherit"><Link to="/category/Bazar"> Bazar </Link></Button>
            <Button color="inherit"><Link to="/category/Decoracion"> Decoración </Link></Button>
            <Button color="inherit"><Link to="/category/Vestimenta"> Vestimenta </Link></Button>
            <Button color="inherit"><Link to="/category/RopaDeCama"> Ropa de cama </Link></Button>
            <CartWidget/>       
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>

      
      </>
    )
}