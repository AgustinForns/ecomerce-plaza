import React, {useState, useEffect} from "react"
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


export default function ItemCount({stock, initial, onAdd, item}) {

  
    const [contador, setContador] = useState(initial);


    console.log(contador)

    return (
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
        </CardContent>
        <CardActions >
                <Button  startIcon={<AddCircleIcon/>} size="small" onClick={() => {
                  if (contador < stock) {
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
        <Button onClick={() =>{
          console.log(contador)
          onAdd(contador)
          
        }}>Agregar al carrito</Button>
        <Button><Link to={`/product/${item.idproduct}`} >Ver detalle</Link></Button>
    </Card>
    </>
    );
  }