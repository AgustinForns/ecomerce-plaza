import React, {useState, useEffect, useContext} from "react"
import {Link} from "react-router-dom";
import { addDoc,collection, getFirestore } from "firebase/firestore";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { contexto } from "./CartContext";
import { alpha } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import CardContent from '@mui/material/CardContent';
import { type } from "@testing-library/user-event/dist/type";




export default function Comprar( ){
    const [email, setEmail] = useState ("")
    const [nombre, setNombre] = useState ("")
    const [apellido, setApellido] = useState ("")
    const [tel, setTel] = useState ("")
    const [idCompra, setIdCompra] = useState ("")
    const [cartelito, setCartelito] = useState ("")
   /*  const [apagarBoton, setApagarBoton] = useState (false) */
    const[order, setOrder] = useState({})
    const[mostrarBoton, setMostrarBoton] = useState("block")

    const {productosAgregados, clear, totalPrice, setTotalPrice} = useContext(contexto);
    console.log(productosAgregados)

/*     useEffect(()=>{
        setApagarBoton(true)
    },[apagarBoton])
    */
    
    useEffect(()=>{
        setOrder({
            buyer: { name: nombre+``+apellido, phone: tel, emai: email }, 
            items: productosAgregados,
            total: totalPrice,
            } )
    },[nombre, apellido, tel, email])
    
    const comprar = () => {
      
        if (!nombre || !tel || !email){
            setCartelito("Revisa los datos y vuelve a intentar")
        } else {
            
            setMostrarBoton("none")
            console.log(order) 
            const db = getFirestore()
            const miCollection = collection(db, `orders`)
            console.log(miCollection)
            addDoc(miCollection, order).then(({id})=>{
                setIdCompra(id)
                console.log(order)
            }).catch((e)=>{
               console.log("error")
            })       
   
        }
    }
    console.log(idCompra)
    return(

        <div>
        
         {
            idCompra=="" ? (
               
                <Box
                sx={{
                    display: 'flex',
                    flexDirection:`column`,
                    alignItems: 'center',
                    '& > :not(style)': { m: 1 },
                }}
                    >
                    {cartelito && "ERROR: " + cartelito}
                    <TextField
                        sx={{display:``}}
                        helperText="Ingresa tu nombre"
                        id="demo-helper-text-misaligned"
                        label="Nombre"
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    <TextField
                        sx={{display:`block`}}
                        helperText="Ingresa tu apellido"
                        id="demo-helper-text-misaligned"
                        label="Apellido"
                        type="text"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                    />
                    <TextField
                        helperText="Ingresa tu mail"
                        id="demo-helper-text-misaligned"
                        label="Mail"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        helperText="Ingresa tu telefono"
                        id="demo-helper-text-misaligned"
                        label="Telefono"
                        type="number"
                        onChange={(e) => setTel(e.target.value)}
                    />
                    <Button variant="outlined" sx={{display:`${mostrarBoton}`}} onClick={()=>{
                        comprar()
                    }}>Terminar compra</Button>
                </Box> 
               
            ) : (
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Felicidades {order.buyer.name}! Tu orden de compra fue realizada por un total de ${totalPrice}.
                        El Nº de orden de compra es: {idCompra}
                    </Typography>
                </CardContent>
            )
        } 
         
         </div>
          
      
    )
}