import React, {useState, useEffect, useContext} from "react"
import ItemDetail from "./ItemDetail";
import CartContext, { contexto } from "./CartContext";
import ItemDetailCart from "./ItemDetailCart";


export default function ItemListCart({productosAgregados}){
    

    
  
    return(
    <>      
        {
        productosAgregados ?     
        (productosAgregados.map((item)=>(  
            <ItemDetailCart key={item.idproduct} item={item}/>       
        ))
        ):(
        <p>Loading...</p>
        )
        }       
    </>
    )
}

