import React from "react";
import { BrowserRouter, Link } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import MovieDetails from '../Components/MovieDetails/MovieDetails';
import Landing from "../Pages/Landng";
import BarraNav from "../Components/NavBar/BarraNav";


const  Routing = () => {
   return(
     <>
      <BrowserRouter>
            <h1>Cinema</h1>
            <BarraNav />
            <Link to="/"><h1>Películas</h1></Link>
            <Routes>
              <Route path="/" element={ <Landing /> }/>
              <Route path="/details/:detailId" element={ <MovieDetails /> }/>
            </Routes> 
        </BrowserRouter>
     </>
   )
}

export default Routing;