import React, {useState} from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import "../App.css"



export default function NavBar(){

  const [anchorElNav, setAnchorElNav] =useState(null);

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

    return( <>

  <AppBar position="sticky" sx={{backgroundColor:`burlywood`}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AllInclusiveIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Bienvenido a Plaza!
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            
                <MenuItem key="home" onClick={handleCloseNavMenu}>
                  <Link  to="/"  className="link"  > Home </Link>
                </MenuItem>
                <MenuItem key="bazar" onClick={handleCloseNavMenu}>
                  <Link to="/category/Bazar"  className="link"  > Bazar </Link>
                </MenuItem>
                <MenuItem key="decoracion" onClick={handleCloseNavMenu}>
                  <Link to="/category/Decoracion"  className="link"  > Decoración </Link>
                </MenuItem>
                <MenuItem key="vestimenta" onClick={handleCloseNavMenu}>
                  <Link  to="/category/Vestimenta"  className="link" > Vestimenta </Link>
                </MenuItem>
                <MenuItem key="ropaDeCama" onClick={handleCloseNavMenu} >
                  <Link to="/category/RopaDeCama" className="link" > Ropa de cama </Link>
                </MenuItem>
                
            </Menu>
          </Box>
          <AllInclusiveIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}/>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Plaza!
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
              <Button
                key="home"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link  to="/"  className="link"  > Home </Link>
              </Button>
              <Button
                key="bazar"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link  to="/category/Bazar" className="link"  > Bazar </Link>
              </Button>
              <Button
                key="decoracion"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link  to="/category/Decoracion"  className="link"  > Decoración </Link>
              </Button>
              <Button
                key="vestimenta"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link  to="/category/Vestimenta"  className="link" > Vestimenta </Link>
              </Button>
              <Button
                key="ropaDeCama"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to="/category/RopaDeCama"  className="link" 
            
              > Ropa de cama </Link>
              </Button>
              
          
          </Box>
          <CartWidget/> 
        </Toolbar>
      </Container>
    </AppBar>



   
      
      </>
    )
}