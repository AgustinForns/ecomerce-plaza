import React from "react"
import ItemCount from "./ItemCount"


export default function ItemDetail({item}){
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

