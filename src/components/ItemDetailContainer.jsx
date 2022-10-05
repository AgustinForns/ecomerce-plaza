import React, {useState, useEffect} from "react"
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";
import {getFirestore, doc, getDoc} from "firebase/firestore"





export default function ItemDetailContainer(){
        const { idproduct} = useParams ();
        const[item, setItem] = useState({})
        const[error, setError] = useState(``)
        const[loading, setLoading] = useState(true);
        
        
        

        useEffect(() => {
            const db = getFirestore();
            const productoRef = doc(db, `products`, `${idproduct}` );
            getDoc(productoRef).then((res)=>{
                

                const miObjeto = {...res.data(), idproduct: res.id};
                setItem(miObjeto)
                
            }).catch((e)=>{
                setError(e);
            }).finally(()=>{
                setLoading(false);
            })
        },[idproduct])
    


    
    return(
        <>  
       <div style={{display:`flex`, flexDirection:`column`, alignItems: `center`, height:"75vh", marginBottom:`23px`}}>
       <div>
            <p>{error && error}</p>
        </div>
         { loading ? (
               <p style={{height:`100vh`}}>Loading..</p>
         ) : (
             <ItemDetail key={item.idproduct} item={item}  />
         )
        
         }
       </div>
          
        </>
    )
}

