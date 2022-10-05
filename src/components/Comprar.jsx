import React, {useState, useEffect, useContext} from "react"
import {Link} from "react-router-dom";
import { addDoc,collection, getFirestore , doc, updateDoc} from "firebase/firestore";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { contexto } from "./CartContext";
import Typography from '@mui/material/Typography';
import validator from 'validator'
import "../App.css"






export default function Comprar( ){
    const [email, setEmail] = useState ("")
    const [nombre, setNombre] = useState ("")
    const [apellido, setApellido] = useState ("")
    const [tel, setTel] = useState ("")
    const [idCompra, setIdCompra] = useState ("")
    const [cartelito, setCartelito] = useState ("")
    const[order, setOrder] = useState({})
    const[mostrarBoton, setMostrarBoton] = useState("block")
    const[mostrarCartel, setMostrarCartel] = useState("none")

    const {productosAgregados,  totalPrice,  mostrarAlerta, clear} = useContext(contexto);

    
    useEffect(()=>{
        setOrder({
            buyer: { name: nombre+``+apellido, phone: tel, email: email }, 
            items: productosAgregados,
            total: totalPrice,
            } )
    },[nombre, apellido, tel, email, totalPrice, productosAgregados])
    
    const comprar = () => {
      
        if (!nombre || !apellido || !tel || !email || !(validator.isEmail(email))){
            setCartelito("Revisa los datos y vuelve a intentar")
            
        } else {
          
            setMostrarCartel("block")
            setMostrarBoton("none")
            const db = getFirestore()
            const miCollection = collection(db, `orders`)
            addDoc(miCollection, order).then(({id})=>{
                    setIdCompra(id)
                    setMostrarCartel("none")
                
            }).catch((e)=>{
                mostrarAlerta("error","Ups..","Hubo un problema. Vuelve a intentarlo")
            }).finally(()=>{
                const db = getFirestore()

                let productChange
                productosAgregados.forEach(item => {
                    productChange = doc(db, `products`, `${item.idproduct}`)
                    updateDoc(productChange, {stock: item.stock - item.quantityBuy})
                    
                  
                });
                
            })
        }
    }

    return(

        <div style={{padding:`90px`, paddingBottom:`175px`}}>
        
         {
            idCompra==="" ? (
               
              

                <Box
                sx={{
                    display: 'flex',
                    flexDirection:`column`,
                    alignItems: 'center',
                    '& > :not(style)': { m: 1 },
                }}
                    >
                    <p style={{margin:`10px`}}>{cartelito && "ERROR: " + cartelito}</p>
                    
                    <TextField
                        sx={{display:``}}
                        helperText="Ingresa tu nombre"
                        id="demo-helper-text-misaligned"
                        label="Nombre"
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                    <TextField
                        sx={{display:`block`}}
                        helperText="Ingresa tu apellido"
                        id="demo-helper-text-misaligned"
                        label="Apellido"
                        type="text"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                    />
                    <TextField
                        helperText="Ingresa tu mail"
                        id="demo-helper-text-misaligned"
                        label="Mail"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        helperText="Ingresa tu telefono"
                        id="demo-helper-text-misaligned"
                        label="Telefono"
                        type="number"
                        onChange={(e) => setTel(e.target.value)}
                    />
                    <Button variant="outlined" sx={{display:`${mostrarBoton}`}} onClick={()=>{
                        comprar()
                    }}>Terminar compra</Button>
                    <Typography  variant="h5" component="div" sx={{display:`${mostrarCartel}`}} >
                       Espera...
                    </Typography>
                    
                </Box> 
               
            ) : (
                
                    <div style={{display:`flex`, justifyContent:`center`, flexDirection:`column`, paddingBottom:`290px`}}>
                        <Typography gutterBottom variant="h5" component="div" sx={{padding:`10px`}}>
                            Felicidades {order.buyer.name}! Tu orden de compra fue realizada por un total de ${totalPrice}.
                            El Nº de orden de compra es: {idCompra}
                        </Typography>
                        <Button onClick={()=>{clear()}} sx={{color:` rgb(90, 89, 105)`,  backgroundColor: "burlywood", border:1, borderRadius:40, padding:`10px`}}> <Link to="/" className="link" >Ir a inicio</Link></Button>
                        

                    </div>
                
            )
        } 
         
         </div>
          
      
    )
}