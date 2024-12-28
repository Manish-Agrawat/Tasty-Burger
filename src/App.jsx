import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import About from "../src/components/Pages/Home/About";
import Menu from "./components/Pages/Home/Menu";
import Blog from "./components/Pages/Home/Blog";

import Contact from "./components/Pages/Home/Contact";
import LearnMorePage from "./components/Pages/Home/LearnMore";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/learnmore" element={<LearnMorePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
