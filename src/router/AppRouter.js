import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../pages/home';
import About from '../pages/About';
import Pokedex from '../pages/Pokedex';

function AppRouter ()
{
  return(

    <div>

      <NavBar/>

        <Routes>

        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/pokedex" element={<Pokedex/>}></Route>

        </Routes>

    </div>

  );

}


export default AppRouter;