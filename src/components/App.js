import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from "./ContactUs"
import Watchlist from './Watchlist';
import AboutUs from './AboutUs';
import NavBar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';

function App() {

  return (
    <BrowserRouter>
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path={'/'}  element={<Watchlist/>} exact/>
        <Route path={"/aboutus"} element={<AboutUs/>}/>
        <Route path={"/contactus"} element={<ContactUs />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}



export default App;
