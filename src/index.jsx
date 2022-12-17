import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';
import News from './pages/News';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Pokedex' element={<Pokedex />} />
        <Route path='/News' element={<News />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

