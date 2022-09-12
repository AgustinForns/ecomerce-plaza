import React, {useState, useEffect} from "react"
import Item from "./Item";
import ItemDetail from "./ItemDetail";


export default function ItemList({items}){
    
    
    console.log(items)
    
  
    return(
    <>      
        {
        items ?     
        (items.map((item)=>(  
            <ItemDetail key={item.idproduct} item={item}/>       
        ))
        ):(
        <p>Loading...</p>
        )
        }       
    </>
    )
}

