import React, {useState, useEffect} from "react"
import ItemCart from "./ItemCart";
import ItemCount from "./ItemCount";


export default function ItemDetailCart({item}){
   
    return(
        <>
            {item ? (
                <ItemCart  item ={item}/>
                    
            ):(
                <p>Loading...</p>
            )}
                     
        </>
    )
}

