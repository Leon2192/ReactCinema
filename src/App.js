import BarraNav from "./Components/NavBar/BarraNav";
import React from "react";
import { BrowserRouter, Link } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import MovieDetails from '../src/Components/MovieDetails/MovieDetails';
import Landing from "./Pages/Landng";

const  App = () => {
   return(
     <>
      <BrowserRouter>
            <h1>Hoyts</h1>
            <BarraNav/>
            <Link to="/"><h1>Películas</h1></Link>
            <Routes>
              <Route path="/" element={ <Landing /> }/>
              <Route path="/details/:detailId" element={ <MovieDetails /> }/>
            </Routes> 
        </BrowserRouter>
     </>
   )
}

export default App;
