import React, {useState, useEffect} from "react"
import Item from "./Item";


export default function ItemList({items, onAdd}){
    
    
    console.log(items)
    
  
    return(
    <>      
        {
        items ?     
        (items.map((item)=>(  
            <Item key={item.idproduct} item={item} onAdd={onAdd}/>       
        ))
        ):(
        <p>Loading...</p>
        )
        }       
    </>
    )
}

