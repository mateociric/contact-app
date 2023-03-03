import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from 'components/Header/Header';
import Navbar from 'components/Navbar/Navbar';
import CardDashboard from 'pages/CardDashboard/CardDashboard';
import CardFavorite from 'pages/CardFavorite/CardFavorite';
import CardCreate from 'pages/CardCreate/CardCreate';
import CardModifie from 'pages/CardModifie/CardModifie';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Routes>
          <Route path='/*' element={<CardDashboard />}></Route>
          <Route path='/CardFavorite' element={<CardFavorite />}></Route>
          <Route path='/CardCreate' element={<CardCreate />}></Route>
          <Route path='/CardModifie' element={<CardModifie />}></Route>
          <Route path='/CardModifie/:id' element={<CardModifie />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
