import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
        <Route path={'/watchlist'}  element={<WatchList />} exact />
        <Route path={"/aboutus"} element={<AboutUs />}/>
        <Route path={"/contactus"} element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;