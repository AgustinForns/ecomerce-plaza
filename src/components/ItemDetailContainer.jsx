import React, {useState, useEffect, useContext} from "react"
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";
import {getFirestore, doc, getDoc} from "firebase/firestore"
import { contexto } from "./CartContext";
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";






export default function ItemDetailContainer(){
        const { idproduct} = useParams ();
        const[item, setItem] = useState({})
        const[error, setError] = useState(``)
        const[loading, setLoading] = useState(true);
        const {productosAgregados} = useContext(contexto);
        
        
        

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
       <div style={{display:`flex`, flexDirection:`column`, alignItems: `center`, height:"75vh", marginBottom:`45px`}}>
       <div>
            <p>{error && error}</p>
        </div>
         { loading ? (
               <p style={{height:`100vh`}}>Loading..</p>
         ) : (
            
           <div>
             {
                 productosAgregados.length > 0 && <Button ><Link to="/cart" className="link" style={{ 
                     backgroundColor: "burlywood", border:1, borderRadius:40, padding:`10px`}}>Ver carrito</Link></Button>
             }
             
              <ItemDetail key={item.idproduct} item={item}  />
           </div>
         )
        
         }
       </div>
          
        </>
    )
}

