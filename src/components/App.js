import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Homepage';
import WatchList from './WatchList';
import ContactUs from "./ContactUs"
import AboutUs from './AboutUs';
import NavBar from "./Navbar";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className='App'>
      <NavBar />
      <Routes>
      <Route path={"/"}  element={<Homepage />} />
        <Route path={"/watchlist"}  element={<WatchList />} />
        <Route path={"/aboutus"} element={<AboutUs />}/>
        <Route path={"/contactus"} element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;