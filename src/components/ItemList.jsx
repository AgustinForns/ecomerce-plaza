import React from "react"
import ItemDetail from "./ItemDetail";


export default function ItemList({items}){
   

    return(
    <>      
     <div style={{display: `flex`, flexWrap:"wrap", justifyContent:`center`, paddingBottom:`34px`}}>
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

