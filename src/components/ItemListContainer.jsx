import React, {useState, useEffect} from "react"
import ItemList from "./ItemList"
import {useParams} from "react-router-dom";
import {getFirestore, docs, collection, getDocs} from "firebase/firestore"


export default function ItemListContainer({saludo}){
    
    const {idcategory, idproduct} = useParams ();
    const [items, setItems] = useState([])


    useEffect(() => {
      
        const db = getFirestore();
        const collectionRef = collection(db, `products` );
        getDocs(collectionRef).then((res)=>{
            let productosLimpios = res.docs.map((item) => {
                
                return {...item.data(), idproduct: item.id} 
                
            })

            if (productosLimpios) {
                  (!idcategory ? (
                    //HOME
                    setItems(productosLimpios)  
                    ) : (
                    //EN UN CATEGORIA PUNTUAL
                    setItems(productosLimpios.filter((product) => product.idcategory == idcategory))
                    )
                )  
            }
                   
        })
    },[idcategory])
    


  /*   let promesaItems = new Promise((res, rej) =>{
        setTimeout(() => {
            console.log(productos)
            res(productos)
        }, 3000);
    }); 
  

    useEffect(() =>{
        console.log(idcategory)
        promesaItems.then((res) =>{
            (!idcategory ? (
                //HOME
                setItems(res)
               
                
                ) : (
                //EN UN CATEGORIA PUNTUAL
                setItems(res.filter((product) => product.idcategory == idcategory))
          
                )
            )
        console.log(items)
        })
    },[idcategory] )
 */

   
    return(
        <>
        <h1>{saludo()}</h1>
        {
            items == 0 ? (
                <div>Loading..</div>
            ) : (
                <ItemList items={items} />
            )
        }
            
        
        </>
    )
}

