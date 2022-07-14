import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Specials from "./routes/Specials";
import { render } from "react-dom";
import Home from "./routes/Home";
import Menu from "./routes/Menu";
import React from "react";
import "./index.css";

render(
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='menu' element={<Menu />} />
      <Route path='specials' element={<Specials />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
