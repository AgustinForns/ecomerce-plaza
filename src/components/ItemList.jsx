import React, {useState, useEffect, useContext} from "react"
import ItemDetail from "./ItemDetail";


export default function ItemList({items}){

  
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

