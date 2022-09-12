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
import React, {useState, useEffect} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart';

const productosHC = [
  {idproduct:1 , nombre: "Vaso de vidrio", descripcion: "Vaso ideal para reuniones informales", precio: 100, idcategory:"Bazar", stock:10, initial:2},
  {idproduct:2 , nombre: "Taza de cerámica", descripcion: "Taza perfecta para tomar el te en ocasiones especiales", precio: 200, idcategory:"Bazar", stock:2, initial:0},
  {idproduct:3 , nombre: "Plato de vidrio", descripcion: "Uso diario e informal", precio: 300, idcategory:"Bazar", stock:9, initial:0},
  {idproduct:4 , nombre: "Almohadon de lana", descripcion: "Comodidad al 100%", precio: 456, idcategory:"Decoracion", stock:5, initial:0},
  {idproduct:5 , nombre: "Mantel blanco", descripcion: "Mantel blanco de 1000x1000", precio: 300, idcategory:"Manteles", stock:45, initial:0},
  {idproduct:6 , nombre: "Pijama Lola", descripcion: "Pijama color beggie ideal para estar en la casa", precio: 468, idcategory:"Vestimenta", stock:10, initial:0},
  {idproduct:7 , nombre: "Sabana blanca ", descripcion: "Sabana blanca de 3000x5000", precio: 4564, idcategory:"RopaDeCama", stock:10, initial:0},
]




function App() {
  const saludo = () =>{
    return <div style={{color:"blue", backgroundColor: "gray", border: 1, borderRadius: 50}}>A tu alcance lo que más necesitas!</ div>
  }
  const onAdd = (contador) =>{
    console.log(contador)
    alert(`Vas a comprar ${contador} productos`)
  }

  const itemIngresado = (itemIngresado) =>{
    return itemIngresado
  }


  return (
    <div className='App'>
      <BrowserRouter>
      <NavBar/> {/* pongoi los componentes que van siempre */}
        <Routes>
          <Route path='/' element={<ItemListContainer saludo={saludo} productos={productosHC}/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/category/:idcategory' element={<ItemListContainer saludo={saludo}  productos={productosHC}/>}></Route>
          <Route path='/product/:idproduct' element={<ItemDetailContainer productos={productosHC} />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <NavBar/> */}
      {/* <ItemListContainer saludo={saludo}/>  */}
      {/* <ItemCount stock={10} initial={1} onAdd={onAdd} /> */}
     {/*  <ItemDetailContainer onAdd={onAdd}/> */}



    </div>
   
  );
}

export default App;
