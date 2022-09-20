import React, {useState, useEffect} from "react"
import ItemCount from "./ItemCount"


export default function ItemDetail({item}){
   
    return(
        <>
   <div style={{margin:"10px", padding:"20px"}}>
     
         {item.idproduct ? (
             <ItemCount item ={item}/>
         ):(
             <p>Loading...</p>
         )}
   </div >
        </>
    )
}

