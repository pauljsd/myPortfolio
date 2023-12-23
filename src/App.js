import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "../src/components/pages/HomePage";
import About from "../src/components/pages/About";
import Contact from "../src/components/pages/Contact";
import Portfolio from "../src/components/pages/Portfolio";
import Services from "../src/components/pages/Services";
import "./index.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
