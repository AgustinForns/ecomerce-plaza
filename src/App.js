import './App.css';
import NavBar from './components/NavBar';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContext from "./components/CartContext";
import Cart from "./components/Cart";
import Comprar from './components/Comprar';
import Footer from './components/Footer';




function App() {

  return (
    <div className='App'>
      <CartContext>
        <BrowserRouter>
        <NavBar/> 
          <Routes>
            <Route path='/' element={<ItemListContainer/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/category/:idcategory' element={<ItemListContainer/>}></Route>
            <Route path='/product/:idproduct' element={<ItemDetailContainer />}></Route>
            <Route path='/comprar' element={<Comprar/>}></Route>
          </Routes>
        <Footer/>
        </BrowserRouter>
      
      </CartContext>
    </div>
   
  );
}

export default App;
