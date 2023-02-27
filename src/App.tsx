import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Dashboard from './component/Dashboard/Dashboard';
import Favorite from './component/Favorite/Favorite';
import Create from './component/Create/Create';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Routes>
          <Route path='/*' element={<Dashboard />}></Route>
          <Route path='/Favorite' element={<Favorite />}></Route>
          <Route path='/Create' element={<Create />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
