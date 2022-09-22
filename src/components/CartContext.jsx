import React, {useState, useEffect, createContext} from "react"
import {Link} from "react-router-dom";
import {getFirestore, doc, collection, getDocs} from "firebase/firestore"



export const contexto = createContext();


export default function CartContext({children}){
    
    const[quantity, setQuantity] = useState(0)
    const [productosAgregados, setProductosAgregados] = useState ([])
    const [totalPrice, setTotalPrice] = useState(0)
   
   /*  const[productos, setProductos] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const collectionRef = collection(db, `products` );
        getDocs(collectionRef).then((res)=>{ */

        /*     let productosLimpios = []
            res.docs.forEach((item) => {
                console.log(item)
                const obejtoLimpio ={...item.data(), id: item.id}
                console.log(obejtoLimpio)
                productosLimpios.push(obejtoLimpio)
            })
            setProductos(productosLimpios)
 */
            //const productosLimpios = res.docs

            //const misObjetos = {...res.data(), id: res.id};
            //setProductos(misObjetos)

            //CON MAP
      /*       let productosLimpios = res.docs.map((item) => {
                
                return {...item.data(), idproduct: item.id} // el return del map cambia/remplaza
                
            })
            setProductos(productosLimpios)
            console.log(productosLimpios)

            
        }).catch((e)=>{
            console.log("error")
        })
    },[]) */

    const addToCart = (item, addQuantity) =>{
        console.log(addQuantity)
   

        if (productosAgregados.some( productoAgregado => productoAgregado.idproduct == item.idproduct)) {
            let productoAñadir = productosAgregados.find((producto) => producto.idproduct == item.idproduct )
            if ((productoAñadir.quantityBuy + addQuantity)> productoAñadir.stock) {
                alert("no se pueden añadir mas productos porque no hay stock")
            } else {
                
                setProductosAgregados(
                    [...(productosAgregados.filter((product) => product.idproduct !== item.idproduct)), {...item, quantityBuy:((( productosAgregados.find((producto) => producto.idproduct == item.idproduct )).quantityBuy) + addQuantity) }]
                    /* ( productosAgregados.find((producto) => producto.idproduct == item.idproduct )).quantityBuy += quantity */
                )
               
            }
           
        }else{
           
            setProductosAgregados([...productosAgregados, {...item, quantityBuy: addQuantity}] )
            console.log(productosAgregados)
        }
    }

    const removeItem = (item) =>{    
        setProductosAgregados(productosAgregados.filter((product) => product.idproduct !== item.idproduct))     
    }

    const clear = () => {
        setProductosAgregados([]);
      };
      



    useEffect(() =>{
        let total = 0
        let totalItem = 0
        productosAgregados.forEach((productoAgregado) => {
            totalItem = ((productoAgregado.precio)*(productoAgregado.quantityBuy)) 
            total += totalItem
           
        });
        setTotalPrice(total)
     

    },[productosAgregados])

    const summaryPrice = () => {
        let total = 0
        let totalItem = 0
        productosAgregados.forEach((productoAgregado) => {
            totalItem = ((productoAgregado.precio)*(productoAgregado.quantityBuy)) 
            total += totalItem
           
        });
        setTotalPrice(total)
    }

    return(
        <>
        
        <contexto.Provider value={{productosAgregados, setProductosAgregados, removeItem, addToCart, clear, quantity, setQuantity, totalPrice, setTotalPrice,  summaryPrice}}>
                {children}
                
        </contexto.Provider>
        
    
        </>
        
    )
}