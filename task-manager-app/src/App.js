import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { LoginPage } from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/about" element={<AboutUs/>} ></Route>
        <Route path="/login" element={<LoginPage/>} ></Route>
      </Routes>
    </Router>
  );
}

export default App;
