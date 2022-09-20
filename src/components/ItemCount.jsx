import React, {useState, useEffect, useContext} from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveIcon from '@mui/icons-material/Remove';
import ItemDetailContainer from "./ItemDetailContainer";
import {Link} from "react-router-dom";
import CartContext, { contexto } from "./CartContext";



export default function ItemCount({item}) {

    const {addToCart, summaryPrice} = useContext(contexto)
    const [contador, setContador] = useState(item.initial);

    return (
    <>
    <Card sx={{ maxWidth: 345, justifyContent: `center` }}>
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
            Precio: ${item.precio}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Stock: {item.stock}
          </Typography>
        </CardContent>
        <CardActions sx={{justifyContent: `center` }}>
                  <Button  startIcon={<AddCircleIcon/>} size="small" onClick={() => {
                    if (contador < item.stock) {
                        setContador(contador + 1);
                    }  
                  }}></Button>
                  <div>Cant: {contador} </div>
                  <Button startIcon={<RemoveIcon/>} size="small" onClick={ () => {
                    if (contador > 0) {
                        setContador(contador - 1);
                    }  
                  }}></Button>
            
        </CardActions>
      
        <Button 
        
        onClick={() =>{ 
          if (contador>0) {
            addToCart(item, contador) 
            console.log(contador)
            /* summaryPrice() */
          }
              
        }}>Agregar al carrito</Button>
        <Button ><Link to="/cart" >Ver carrito</Link></Button>
        <Button><Link to={`/product/${item.idproduct}`} >Ver detalle producto</Link></Button>
    </Card>
    </>
    );
  }