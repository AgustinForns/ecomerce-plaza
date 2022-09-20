import React, {useState, useEffect, createContext} from "react"
import {Link} from "react-router-dom";



export const contexto = createContext();


export default function CartContext({children}){
    
    const[quantity, setQuantity] = useState(0)
    const [productosAgregados, setProductosAgregados] = useState ([])
    const [totalPrice, setTotalPrice] = useState(0)
    useEffect(() =>{

    },[])

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