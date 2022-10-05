import React from "react"
import { contexto } from "./CartContext";
import ItemListCart from "./ItemListCart";
import { useContext } from "react"
import { Button } from "@mui/material";
import CartSummary from "./CartSummary";
import {Link} from "react-router-dom";
import "../App.css"

export default function Cart(){
    const {productosAgregados, clear, totalPrice} = useContext(contexto);

    return(
        <>
        <div>
               {                 
                    ((productosAgregados.length)===0) ?   (
                          <div style={{margin:"50px", fontSize:"30px", height:"100vh", }}><Link to="/" className="link"  >No tienes nada en la canasta. Haz click aqui y ve a buscar lo que necesitas.</Link></div>
                    ):( 
                        <>  
                        <div style={{display:`flex`, flexDirection:`column`, justifyContent:`center`, alignItems:`center`, paddingBottom:`85px`}}>
                            <CartSummary totalPrice={totalPrice}/>
                            <div style={{display:`flex`, flexDirection:`row`}}>  
                                <Button sx={{color:` rgb(90, 89, 105)`,  backgroundColor: "burlywood", border:1, borderRadius:40, padding:`10px`}}><Link to="/comprar" className="link" > TERMINAR COMPRA</Link> </Button>
                                <Button  sx={{color:` rgb(90, 89, 105)`,  backgroundColor: "burlywood", border:1, borderRadius:40, padding:`10px`, marginLeft:`50px`}}
                                    onClick={()=>{
                                        clear()
                                    }}
                                >LIMPIAR CARRO</Button>
                            </div> 
                            <ItemListCart productosAgregados={productosAgregados}/>
                        </div>                             
                        </>
                      )  
              }
        </div>
        </>

    )

}