import React, {useState, useEffect} from "react"


export default function ItemListContainer({saludo}){
    
    const items = [
        {id:1 , nombre: "item1", descripcion: "descripcion1", precio: 100},
        {id:2 , nombre: "item2", descripcion: "descripcion2", precio: 200},
        {id:3 , nombre: "item3", descripcion: "descripcion3", precio: 300},
    ]
    
    return(
        <>
        <h1>{saludo()}</h1>
        <div>{JSON.stringify(items)}</div>
        </>
    )
}

