import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom";
import { contexto } from "./CartContext";
import ItemListCart from "./ItemListCart";
import { useContext } from "react"
import { Button } from "@mui/material";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Co2Sharp } from "@mui/icons-material";


export default function CartSummary({totalPrice}){

   
    return(
    <>                   
        <Card sx={{ maxWidth: 345, justifyContent: `center` }}>
        <Typography gutterBottom variant="h5" component="div">
            Precio total a pagar: ${totalPrice}
          </Typography>
        </Card>
    </>     
      

    )

}