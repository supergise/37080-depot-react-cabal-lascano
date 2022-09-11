import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartProvider from './contex/CartContext';

const App = () => {
  return (
    <>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={ <ItemListContainer greeting= 'Hi there!' /> } />
            <Route path="/category/:categoryName" element={ <ItemListContainer /> } />
            <Route path="/item/:idProd" element={ <ItemDetailContainer /> } />
            <Route path="/cart" element={ <Cart /> } />
          </Routes>
          <Footer />
        </CartProvider>
    </>
    );
  };

export default App;