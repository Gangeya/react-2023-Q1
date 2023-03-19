import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import { Home } from './pages/home';
import { About } from './pages/aboutus';
import { Page404 } from './pages/404';

import './App.css';

function App() {

  return (
    <div className="App">
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
