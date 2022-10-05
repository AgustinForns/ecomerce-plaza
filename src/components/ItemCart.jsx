import React, {useState, useEffect, useContext} from "react"
import { contexto } from "./CartContext";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import "../App.css"




export default function ItemCart({item}){
    const {removeItem} = useContext(contexto)
    const [priceItem, setPriceItem] = useState(0)
    useEffect(()=>{
      setPriceItem(item.precio*item.quantityBuy)

    },[])
    return(
        <>
          <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={item.img} 
            alt={item.descripcion}
          />
          <CardContent sx={{align:`center`}}>
            <Typography variant="h5" color="text.secondary">
              {item.nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Cantidad: {item.quantityBuy}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A pagar: ${priceItem}
            </Typography>
            
          </CardContent>
          <Button 
          sx={{color:` rgb(90, 89, 105)` }}
          onClick={() =>{
            removeItem(item)
          }}>Remove Item</Button>
          <Button><Link to={`/product/${item.idproduct}`} className="link"  >Ver detalle</Link></Button>
      </Card>
   
    </>
        
       
    )
}
