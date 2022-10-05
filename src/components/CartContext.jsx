import React, {useState, useEffect, createContext} from "react"
import 'react-toastify/dist/ReactToastify.css';
import swal from "sweetalert"



export const contexto = createContext();

export default function CartContext({children}){

    const valorInit = () => {
        if (!(localStorage.getItem(`productosAgregados`))) {
            return []
        } else {
            return JSON.parse(localStorage.getItem(`productosAgregados`))
        }
    }

    let prodLocalStorage = valorInit()

    const[quantity, setQuantity] = useState(0)
    const [productosAgregados, setProductosAgregados] = useState(prodLocalStorage)
    const [totalPrice, setTotalPrice] = useState(0)

    const mostrarAlerta = (type, titulo, msg) =>{
        swal(
            {title: titulo,
            text: msg,
            icon: type,
            button: "Aceptar"}
            )
    }

    const addToCart = (item, addQuantity) =>{
    
        
        if (productosAgregados.some( productoAgregado => productoAgregado.idproduct === item.idproduct)) {
            let productoAñadir = productosAgregados.find((producto) => producto.idproduct === item.idproduct )

            if ((productoAñadir.quantityBuy + addQuantity)> productoAñadir.stock) {
                if((productoAñadir.stock-productoAñadir.quantityBuy)===0){
                    mostrarAlerta("error","Ups..","No puedes agregar mas productos porque no hay stock")
                }else{
                    mostrarAlerta("error","Ups..", `Por el momento solo puedes añadir ${productoAñadir.stock-productoAñadir.quantityBuy} unidad(es)`)
                }
                

                 
              
               
            } else {
                
                setProductosAgregados(
                    [...(productosAgregados.filter((product) => product.idproduct !== item.idproduct)), {...item, quantityBuy:((( productosAgregados.find((producto) => producto.idproduct === item.idproduct )).quantityBuy) + addQuantity) }] )

                localStorage.setItem(`productosAgregados`,JSON.stringify([...(productosAgregados.filter((product) => product.idproduct !== item.idproduct)), {...item, quantityBuy:((( productosAgregados.find((producto) => producto.idproduct === item.idproduct )).quantityBuy) + addQuantity) }]))   
                mostrarAlerta("success","Felicidades!" ,`Agrgaste ${addQuantity} unidad(es) del producto ${(item.nombre).toUpperCase()}`)
               
               
            }
           
        }else{
           
            setProductosAgregados([...productosAgregados, {...item, quantityBuy: addQuantity}] )
            localStorage.setItem(`productosAgregados`,JSON.stringify([...productosAgregados, {...item, quantityBuy: addQuantity}]))
            mostrarAlerta("success","Felicidades!" ,`Agrgaste al carrito ${addQuantity} unidad(es) del producto ${(item.nombre).toUpperCase()}`)

           
         
           
        }
       
    }

    const removeItem = (item) =>{    
        setProductosAgregados(productosAgregados.filter((product) => product.idproduct !== item.idproduct))
        localStorage.setItem(`productosAgregados`, JSON.stringify(productosAgregados.filter((product) => product.idproduct !== item.idproduct)))     
    }

    const clear = () => {
        setProductosAgregados([]);
        localStorage.setItem(`productosAgregados`, JSON.stringify([]))
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


    return(
        <>
      
            <contexto.Provider value={{productosAgregados, setProductosAgregados, removeItem, addToCart, clear, quantity, setQuantity, totalPrice, setTotalPrice}}>
                {children}        
            </contexto.Provider>
       
        </>
        
    )
}