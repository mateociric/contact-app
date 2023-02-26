import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Dashboard from './component/Dashboard/Dashboard';
import Favorite from './component/Favorite/Favorite';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/Favorite' element={<Favorite />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
