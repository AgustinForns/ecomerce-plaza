import React, {useState, useEffect} from "react"
import ItemCart from "./ItemCart";
import ItemCount from "./ItemCount";


export default function ItemDetailCart({item}){
   
    return(
        <>
          <div style={{margin:`10px`, padding:`20px`}}>
              {item ? (
                  <ItemCart  item ={item} />
                      
              ):(
                  <p>Loading...</p>
              )}
                 
          </div>      
        </>
    )
}

