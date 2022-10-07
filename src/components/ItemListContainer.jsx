import React, {useState, useEffect, useContext} from "react"
import ItemList from "./ItemList"
import {useParams} from "react-router-dom";
import {getFirestore, collection, getDocs} from "firebase/firestore"
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import "../App.css"

import { contexto } from "./CartContext";



export default function ItemListContainer(){
    
    const {idcategory} = useParams ();
    const [items, setItems] = useState([])
    const[error, setError] = useState(``)
    const[loading, setLoading] = useState(true);


    const {productosAgregados} = useContext(contexto);
    const [summaryP, setSummaryP] = useState(0)
    const [display, setDisplay] = useState("none")

    useEffect(() =>{
        let suma =0
        productosAgregados.forEach((productoAgregado) => {
        
            suma += productoAgregado.quantityBuy
        });
        setSummaryP(suma)
        setDisplay(()=>{
            if (summaryP === 0) {
                return "none"
            } else {
                return "flex"
            }
        })
           
    },[productosAgregados, summaryP])


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
                    setItems(productosLimpios.filter((product) => product.idcategory === idcategory))
                    )
                )  
            }
                   
        }).catch((e)=>{
            setError(e)
        }).finally(()=>{
            setLoading(false);
        })
    },[idcategory])
    


    return(
        <>
        <div style={{display:`flex`, flexDirection:`column`, justifyContent:`center`, paddingBottom:`95px`}}>
        <div style={{color:" rgb(90, 89, 105)", fontSize:`20px`, backgroundColor: "burlywood", border: 1, borderRadius: 50, margin:`20px`}}>A tu alcance lo que más necesitas</ div>
        <div>
            <p>{error && error}</p>
        </div>
           
            {
                loading ? (
                    <div style={{height:`100vh`}}>Loading..</div>
                ) : (
                    <div>
                        <Button ><Link to="/cart" className="link" style={{ display:display, backgroundColor: "burlywood", border:1, borderRadius:40, padding:`10px`}}>Ver carrito</Link></Button>
                        <ItemList items={items} />
                    </div>
                )
            }
        </div>
            
        
        </>
    )
}

