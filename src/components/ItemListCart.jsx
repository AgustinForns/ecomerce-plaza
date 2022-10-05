import React from "react"
import ItemDetailCart from "./ItemDetailCart";


export default function ItemListCart({productosAgregados}){
  
    return(
    <>      
       
        <div style={{display:"flex", flexDirection:`row`, justifyContent:`center`, alignContent:`center` , flexWrap:"wrap", paddingBottom:`90px`}}>
             {
             productosAgregados ?     
             (productosAgregados.map((item)=>(  
                 <ItemDetailCart key={item.idproduct} item={item}/> 
                       
             ))
             ):(
             <p>Loading...</p>
             )
             }       
            
        </div>
    </>
    )
}

