import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom";
import { contexto } from "./CartContext";
import ItemListCart from "./ItemListCart";
import { useContext } from "react"
import { Button } from "@mui/material";

export default function Cart(){
    const {productosAgregados, clear} = useContext(contexto);
    return(
        <>
            <Button
            onClick={()=>{
                clear()
            }}
            >LIMPIAR CARRO</Button>
            <ItemListCart productosAgregados={productosAgregados}/>
           
            
        </>

    )

}