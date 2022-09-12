import React, {useState, useEffect} from "react"
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";


export default function ItemDetailContainer({productos}){
        const {idcategory, idproduct} = useParams ();
        console.log(productos)
        console.log(idproduct)
        console.log(productos.find((producto) => producto.idproduct == idproduct))
        const[item, setItem] = useState({})

        
    
        let promesaItem = new Promise((res, rej) =>{
            setTimeout(() => {
                res(productos.find((producto) => producto.idproduct == idproduct))
            }, 2000);
        }); 
        
        useEffect(()=>{
            promesaItem.then((res) =>{
                (
                    !idproduct ? (
                        console.log("No hay oferta")
                    ) : (
                        setItem(res)
                    )
                )           
        },[idproduct])
        })
       
      
    
    
    return(
        <>  
        { item ? (
              <ItemDetail item={item} />
        ) : (
            <p>Loading..</p>
        )

        }
          
        </>
    )
}

