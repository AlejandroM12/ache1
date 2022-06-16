import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/about/About";
import Services from "../pages/services/Services";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
