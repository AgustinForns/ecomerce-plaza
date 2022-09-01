import React, {useState, useEffect} from "react"
import ItemList from "./ItemList"


export default function ItemListContainer({saludo}){
    
    const[items, setItems] = useState([])

    let promesaItems = new Promise((res, rej) =>{

        setTimeout(() => {
          res( [
            {id:1 , nombre: "item1", descripcion: "descripcion1", precio: 100},
            {id:2 , nombre: "item2", descripcion: "descripcion2", precio: 200},
            {id:3 , nombre: "item3", descripcion: "descripcion3", precio: 300},
        ])
        }, 3000);
    }); 

    useEffect(() =>{
        promesaItems.then((res) =>{
            setItems(res)          
        })
    }, [])
    
    return(
        <>
        <h1>{saludo()}</h1>
        <div>
            <ItemList items={items}/>
        </div>
        </>
    )
}

