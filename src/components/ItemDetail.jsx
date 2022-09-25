import React, {useState, useEffect} from "react"
import ItemCount from "./ItemCount"


export default function ItemDetail({item}){
    console.log(item)
    return(
        <>
   <div style={{margin:"10px", padding:"20px"}}>
     
         {!item ? (
           <p>Loading...</p> 
         ):(
            <ItemCount item ={item}/>
         )}
   </div >
        </>
    )
}

