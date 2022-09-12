import React, {useState, useEffect} from "react"
import ItemCount from "./ItemCount"


export default function ItemDetail({item}){
    const onAdd = (contador) =>{
        console.log(contador)
        alert(`Vas a comprar ${contador} productos`)
      }
    return(
        <>
    
        {item.idproduct ? (
            <ItemCount onAdd={onAdd} item ={item}/>
        ):(
            <p>Loading...</p>
        )}
        </>
    )
}

