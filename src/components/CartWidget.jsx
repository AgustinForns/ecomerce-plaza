import React, {useState, useEffect} from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';


export default function CartWidget(){

    return(
        <Button startIcon={<ShoppingCartIcon color="action"/>} sx={{color: `black`}}>4</Button>

    )

}