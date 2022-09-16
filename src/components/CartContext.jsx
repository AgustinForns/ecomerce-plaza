import React, {useState, useEffect, createContext} from "react"
import {Link} from "react-router-dom";



export const contexto = createContext();


export default function CartContext({children}){
    
    const[quantity, setQuantity] = useState(0)
    const [productosAgregados, setProductosAgregados] = useState ([])

    const addToCart = (item, addQuantity) =>{
        //MEJORAR ESTA LINEA- ES UN EJEMLPO NO USAR EN PRODUCCION
        /* setCart([...cart, product]) */
        setQuantity(addQuantity)

        if (productosAgregados.some( productoAgregado => productoAgregado.idproduct == item.idproduct)) {
            let productoAñadir = productosAgregados.find((producto) => producto.idproduct == item.idproduct )
            if ((productoAñadir.quantityBuy + quantity)> productoAñadir.stock) {
                alert("no se pueden añadir mas productos porque no hay stock")
            } else {
               ( productosAgregados.find((producto) => producto.idproduct == item.idproduct )).quantityBuy += quantity
            }
           
        }else{
            setProductosAgregados([...productosAgregados, {...item, quantityBuy: addQuantity}] )
        }
    

    }

    const removeItem = (item) =>{    
        setProductosAgregados(productosAgregados.filter((product) => product.idproduct !== item.idproduct))     
    }

    const clear = () => {
        setProductosAgregados([]);
      };



    return(
        <>
        
        <contexto.Provider value={{productosAgregados, setProductosAgregados, removeItem, addToCart, clear, quantity, setQuantity}}>
                {children}
                
        </contexto.Provider>
        
    
        </>
        
    )
}