import React, {useState, useEffect} from "react"
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";
import {getFirestore, doc, collection, getDoc} from "firebase/firestore"



export default function ItemDetailContainer(){
        const {idcategory, idproduct} = useParams ();
        const[item, setItem] = useState({})
        
        

        useEffect(() => {
            const db = getFirestore();
            const productoRef = doc(db, `products`, `${idproduct}` );
            getDoc(productoRef).then((res)=>{
                

                const miObjeto = {...res.data(), idproduct: res.id};
                setItem(miObjeto)
                
            })
        },[idproduct])
    
      /*   let promesaItem = new Promise((res, rej) =>{
            setTimeout(() => {
                res(productos.find((producto) => producto.idproduct == idproduct))
            }, 2000);
        }); 
 */
        

/* 
        
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
       
      
     */

    
    return(
        <>  
        { !item ? (
              <p>Loading..</p>
        ) : (
            <ItemDetail key={item.idproduct} item={item} />
        )

        }
          
        </>
    )
}

