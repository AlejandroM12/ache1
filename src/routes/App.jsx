import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/about/About";
import Services from "../pages/services/Services";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import ViewportProvider from "../context/viewportContext";

const App = () => {
  return (
    <BrowserRouter>
      <ViewportProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ViewportProvider>
    </BrowserRouter>
  );
};

export default App;
