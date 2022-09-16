import React, {useState, useEffect, useContext} from "react"
import CartContext, { contexto } from "./CartContext";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";



export default function ItemCart({item}){
    const {removeItem} = useContext(contexto)
    return(
        <>


        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          /* image="" */
          alt={item.descripcion}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.idproduct}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Cantidad: {item.quantityBuy}
          </Typography>
        </CardContent>
        <Button 
        onClick={() =>{
          removeItem(item)
        }}>Remove Item</Button>
        <Button><Link to={`/product/${item.idproduct}`} >Ver detalle</Link></Button>
    </Card>
    </>
        
       
    )
}
