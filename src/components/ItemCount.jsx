import React, {useState, useContext} from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveIcon from '@mui/icons-material/Remove';
import {Link} from "react-router-dom";
import "../App.css"

import { contexto } from "./CartContext";
import {useParams} from "react-router-dom";



export default function ItemCount({item}) {

    const {idproduct} = useParams ();
    const {addToCart} = useContext(contexto)
    const [contador, setContador] = useState(item.initial);

    return (
    <>
     {
      !item.length === 0 ? (
        <div>Loading.. </div>
      ):(
        <>
     <div style={{justifyContent:`center`, alignItems:`center`}}>
       <Card sx={{ maxWidth: 280, justifyContent: `center` , alignItems:`center`, alignContent:`center`, padding:`5px`}}>
           <CardMedia
             component="img"
             height="180"
             image = {item.img}
             alt={item.descripcion}
           />
           <CardContent >
             <Typography variant="h5" color="text.secondary">
               {item.nombre}
             </Typography>
             <Typography variant="h6" color="text.secondary">
               Precio: ${item.precio}
             </Typography>
             {idproduct && (<Typography variant="h6" color="text.secondary">
               Stock: {item.stock}
             </Typography>)}
           </CardContent>
      
          {
            item.stock > 0 ? (
              <CardActions sx={{justifyContent: `center` }}>
                    <Button startIcon={<RemoveIcon/>} size="small" onClick={ () => {
                       if (contador > 1) {
                           setContador(contador - 1);
                       }  
                     }}></Button>
                     <div>Cant: {contador} </div>
                     
                      <Button  startIcon={<AddCircleIcon/>} size="small" onClick={() => {
                       if (contador < item.stock) {
                           setContador(contador + 1);
                       }  
                     }}></Button>
               
           </CardActions>
           
           
            ):(
              <Typography variant="h5" color="text.secondary">
                NO HAY STOCK
             </Typography>
            )
          }
           
     
         
          { item.stock > 0 && (<Button  sx={{color:` rgb(90, 89, 105)`}}
           
           onClick={() =>{ 
             if (contador>0) {
               addToCart(item, contador) 


             }
                 
           }}>Agregar al carrito</Button>)}

          
           
          {
              !idproduct ? (
                <Button><Link  to={`/product/${item.idproduct}`} className="link"  >Ver detalle producto</Link></Button>
              )
              :(
                <Typography variant="body2" color="text.secondary">
                  {item.descripcion}
                </Typography>
              )  
          }

           
       </Card>
     </div>
    </>
      )
     }
    
    </>
    );
  }