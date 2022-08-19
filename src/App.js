import React from 'react';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <ItemListContainer greeting= 'Hi!'/>
      <Footer />
    </>
  );
};

export default App;