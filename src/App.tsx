import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from 'components/Header/Header';
import Navbar from 'components/Navbar/Navbar';
import Searchbar from 'components/Searchbar/Searchbar';
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
        <Searchbar />
        <Routes>
          <Route path='/*' element={<CardDashboard/>}></Route>
          <Route path='/CardFavorite/*' element={<CardFavorite />}></Route>
          <Route path='/CardCreate/*' element={<CardCreate />}></Route>
          <Route path='/CardModifie/*' element={<CardModifie />}></Route>
          <Route path='/CardModifie/:fullName/:id' element={<CardModifie />}></Route>
        </Routes>
      </main >
    </>
  );
}

export default App;
