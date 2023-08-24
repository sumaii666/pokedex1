import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navstyle.css';

     function NavBar()
     {
          return(

               <nav className='header'>
                    <ul>
                         <li><Link to="/">Home</Link></li>
                         <li><Link to="/about">About</Link></li>
                         <li><Link to="/pokedex">pokedex</Link></li>
                    </ul>
               </nav>
          )
     }

export default NavBar;
