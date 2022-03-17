import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import Menu from './routes/Menu';
import About from './routes/About';
import Contact from './routes/Contact';


render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
      <Route path='menu' element={<Menu />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='contact' element={<Contact />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


