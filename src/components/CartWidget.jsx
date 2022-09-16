import React, {useState, useEffect} from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";


export default function CartWidget(){

    return(
        <Button startIcon={<ShoppingCartIcon color="action"/>} sx={{color: `black`}}><Link to="./cart">4</Link></Button>

    )

}