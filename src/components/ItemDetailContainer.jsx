import React, {useState, useEffect} from "react"
import ItemDetail from "./ItemDetail";


export default function ItemDetailContainer({onAdd}){

        const[item, setItem] = useState({})
    
        let promesaItem = new Promise((res, rej) =>{
            setTimeout(() => {
              res( {id:1 , nombre: "item1", descripcion: "descripcion1", precio: 100})
            }, 2000);
        }); 
        
        useEffect(()=>{
             promesaItem.then((res) =>{
            setItem(res) 
                   
        },[])
        })
       
      
    
    
    return(
        <>
            <ItemDetail item={item} onAdd={onAdd}/>
        </>
    )
}

