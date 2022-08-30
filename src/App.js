import React from 'react';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <ItemListContainer greeting= 'Hi!' />
      <ItemDetailContainer />
      <Footer />
    </>
  );
};

export default App;