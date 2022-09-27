import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom";
import { contexto } from "./CartContext";
import ItemListCart from "./ItemListCart";
import { useContext } from "react"
import { Button } from "@mui/material";
import CartSummary from "./CartSummary";

export default function Cart(){
    const {productosAgregados, clear, totalPrice, setTotalPrice} = useContext(contexto);

    return(
        <>
      <div>
        
               {                 
                      ((productosAgregados.length)==0) ?   (
                          <div style={{margin:"50px", fontSize:"30px"}}><Link to={"/"}>No tienes nada en la canasta. Haz click aqui y ve a buscar lo que necesitas.</Link></div>
                      ):( 
                           <>  
                              <Button
                              onClick={()=>{
                                  clear()
                              }}
                              >LIMPIAR CARRO</Button>
                              
                              <CartSummary totalPrice={totalPrice}/>
                              
                              <ItemListCart productosAgregados={productosAgregados}/>

                              <Button><Link to="/comprar">TERMINAR COMPRA</Link> </Button>
                           </>
                      )
                  
              }
      </div>
            
 
            
        </>

    )

}