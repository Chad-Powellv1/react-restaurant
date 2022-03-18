import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './routes/Home'
import Menu from './routes/Menu';
import Specials from './routes/Specials';
import Contact from './routes/Contact';


render(
  
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='menu' element={<Menu />} />
      <Route path='specials' element={<Specials />} />
      <Route path='contact' element={<Contact />} />

    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


