import React, {useState, useEffect, useContext} from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import { contexto } from "./CartContext";

export default function CartWidget(){
    const {productosAgregados} = useContext(contexto);
    const [summaryP, setSummaryP] = useState(0)
    const [display, setDisplay] = useState("none")
    console.log(productosAgregados)
    useEffect(() =>{
        let suma =0
        productosAgregados.forEach((productoAgregado) => {
            console.log(productoAgregado.quantityBuy)
            suma += productoAgregado.quantityBuy
        });
        setSummaryP(suma)
        setDisplay(()=>{
            if (summaryP == 0) {
                return "none"
            } else {
                return "flex"
            }
        })
           
    },)


 

    console.log(summaryP)
    return(
            <Button startIcon={<ShoppingCartIcon color="action"/>} sx={{color: `black`, display:display}}><Link to="./cart">
             {summaryP} 
            </Link></Button>
       

    )

}