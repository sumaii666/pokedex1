import React from 'react';
import NavBar from '../components/NavBar';

    function AppRouter (){
        return(
          <>

            <NavBar/>
            <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/about" element={<About/>}/>
            </Routes>
            
          </>
      
          );

    }


export default AppRouter;