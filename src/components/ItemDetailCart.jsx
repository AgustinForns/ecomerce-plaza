import React from "react"
import ItemCart from "./ItemCart";



export default function ItemDetailCart({item}){
   
    return(
        <>
          <div style={{display:`flex`, flexDirection:`column`, margin:`10px`, padding:`20px`}}>
              {item ? (
                  <ItemCart  item ={item} />
                      
              ):(
                  <p>Loading...</p>
              )}
                 
          </div>      
        </>
    )
}

