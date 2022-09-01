import React, {useState, useEffect} from "react"


export default function Item({item}){
    return(
        <>
    
        <div>
            <p> id: {item.id}</p>
            <p> Nombre: {item.nombre}</p>
            <p> Precio: {item.precio}</p> 
        </div>
       
        </>
    )
}

