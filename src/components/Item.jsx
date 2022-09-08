import React, {useState, useEffect} from "react"
import ItemCount from "./ItemCount";


export default function Item({item, onAdd}){
    return(
        <>
         {item ? (
            <ItemCount stock={10} initial={1} onAdd={onAdd} item ={item}/>
            
        ):(
            <p>Loading...</p>
        )}
       
       
        </>
    )
}

