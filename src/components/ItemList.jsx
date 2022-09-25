import React, {useState, useEffect, useContext} from "react"
import ItemDetail from "./ItemDetail";


export default function ItemList({items}){

    return(
    <>      
     <div style={{display: `flex`, flexWrap:"wrap"}}>
           {
           items ?     
           (items.map((item)=>(  
               <ItemDetail key={item.idproduct} item={item}/>       
           ))
           ):(
           <p>Loading...</p>
           )
           }     
     </div>  
    </>
    )
}

