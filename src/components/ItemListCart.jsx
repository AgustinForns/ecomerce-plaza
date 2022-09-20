import React, {useState, useEffect, useContext} from "react"
import ItemDetail from "./ItemDetail";
import CartContext, { contexto } from "./CartContext";
import ItemDetailCart from "./ItemDetailCart";


export default function ItemListCart({productosAgregados}){
    
    console.log(productosAgregados)
    
  
    return(
    <>      
       
        <div style={{display:"flex"}}>
             {
             productosAgregados ?     
             (productosAgregados.map((item)=>(  
                 <ItemDetailCart key={item.idproduct} item={item}/> 
                       
             ))
             ):(
             <p>Loading...</p>
             )
             }       
            
        </div>
    </>
    )
}

