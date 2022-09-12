import React, {useState, useEffect} from "react"
import ItemList from "./ItemList"
import {useParams} from "react-router-dom";



export default function ItemListContainer({saludo, productos}){
    
    const {idcategory, idproduct} = useParams ();
    const[items, setItems] = useState([])

    let promesaItems = new Promise((res, rej) =>{
        setTimeout(() => {
            res(productos)
        }, 3000);
    }); 
    console.log(items)

    useEffect(() =>{
        promesaItems.then((res) =>{
            (!idcategory ? (
                //HOME
                setItems(res)
                ) : (
                //EN UN CATEGORIA PUNTUAL
                setItems(res.filter((product) => product.idcategory == idcategory))
                )
            )    
        })
    }, [idcategory])
    
    return(
        <>
        <h1>{saludo()}</h1>
        {
            (items.length > 0) ? (
                <ItemList items={items} />
            ) : (
                <p>Loading..</p>
            )
        }
            
        
        </>
    )
}

