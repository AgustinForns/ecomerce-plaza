import React, {useState, useEffect, useContext} from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import { contexto } from "./CartContext";
import {Link} from "react-router-dom";
import "../App.css"



export default function CartWidget(){
    const {productosAgregados} = useContext(contexto);
    const [summaryP, setSummaryP] = useState(0)
    const [display, setDisplay] = useState("none")

    useEffect(() =>{
        let suma =0
        productosAgregados.forEach((productoAgregado) => {
        
            suma += productoAgregado.quantityBuy
        });
        setSummaryP(suma)
        setDisplay(()=>{
            if (summaryP === 0) {
                return "none"
            } else {
                return "flex"
            }
        })
           
    },[productosAgregados, summaryP])


 


    return(
            <Button startIcon={<ShoppingCartIcon color="action"/>} sx={{color: `black`, display:display}}><Link to="/cart" className="link"  >
             {summaryP} 
            </Link></Button>
       

    )
    
}