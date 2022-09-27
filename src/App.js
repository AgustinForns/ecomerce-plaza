import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import ItemListContainer from './components/ItemListContainer';
import { border } from '@mui/system';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemDetail from './components/ItemDetail';
import React, {useState, useEffect, useContext} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { contexto } from "./components/CartContext";
import CartContext from "./components/CartContext";
import Cart from "./components/Cart";
import {getFirestore, doc, collection, getDocs} from "firebase/firestore"
import Comprar from './components/Comprar';


/* const productosHC = [
  {idproduct:1 , nombre: "Vaso de vidrio", descripcion: "Vaso ideal para reuniones informales", precio: 100, idcategory:"Bazar", stock:10, initial:2},
  {idproduct:2 , nombre: "Taza de cerámica", descripcion: "Taza perfecta para tomar el te en ocasiones especiales", precio: 200, idcategory:"Bazar", stock:2, initial:0},
  {idproduct:3 , nombre: "Plato de vidrio", descripcion: "Uso diario e informal", precio: 300, idcategory:"Bazar", stock:9, initial:0},
  {idproduct:4 , nombre: "Almohadon de lana", descripcion: "Comodidad al 100%", precio: 456, idcategory:"Decoracion", stock:5, initial:0},
  {idproduct:5 , nombre: "Mantel blanco", descripcion: "Mantel blanco de 1000x1000", precio: 300, idcategory:"Manteles", stock:45, initial:0},
  {idproduct:6 , nombre: "Pijama Lola", descripcion: "Pijama color beggie ideal para estar en la casa", precio: 468, idcategory:"Vestimenta", stock:10, initial:0},
  {idproduct:7 , nombre: "Sabana blanca ", descripcion: "Sabana blanca de 3000x5000", precio: 4564, idcategory:"RopaDeCama", stock:10, initial:0},
]


 */

function App() {

/*   const {productos} = useContext(contexto);
  console.log(productos)
 */

  const[productos, setProductos] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const collectionRef = collection(db, `products` );
        getDocs(collectionRef).then((res)=>{

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
            let productosLimpios = res.docs.map((item) => {
                
                return {...item.data(), idproduct: item.id} // el return del map cambia/remplaza
                
            })
            setProductos(productosLimpios)
      

            
        }).catch((e)=>{
            console.log("error")
        })
    },[])
  
  const saludo = () =>{
    return <div style={{color:"blue", backgroundColor: "gray", border: 1, borderRadius: 50}}>A tu alcance lo que más necesitas!</ div>
  }
 



  return (
    <div className='App'>

      <CartContext>
        <BrowserRouter>
        <NavBar/> 
          <Routes>
            <Route path='/' element={<ItemListContainer saludo={saludo}/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/category/:idcategory' element={<ItemListContainer saludo={saludo}/>}></Route>
            <Route path='/product/:idproduct' element={<ItemDetailContainer />}></Route>
            <Route path='/comprar' element={<Comprar/>}></Route>
          </Routes>
        </BrowserRouter>
      </CartContext>

    


    </div>
   
  );
}

export default App;
