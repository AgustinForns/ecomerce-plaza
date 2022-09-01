import React, {useState, useEffect} from "react"
import Item from "./Item";


export default function ItemList({items}){
    
    
    console.log(items)
    
  
    return(
    <>      
        {items.map((item)=>(  
            <Item key={item.id} item={item}/>       
        ))}       
    </>
    )
}

