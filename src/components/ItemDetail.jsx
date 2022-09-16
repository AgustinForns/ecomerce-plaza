import React, {useState, useEffect} from "react"
import ItemCount from "./ItemCount"


export default function ItemDetail({item}){
   
    return(
        <>
    
        {item.idproduct ? (
            <ItemCount item ={item}/>
        ):(
            <p>Loading...</p>
        )}
        </>
    )
}

