import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/about/About";
import Services from "../pages/services/Services";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";
import ViewportProvider from "../context/viewportContext";
import Jobs from "../pages/jobs/Jobs";

const App = () => {
  return (
    <BrowserRouter>
      <ViewportProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ViewportProvider>
    </BrowserRouter>
  );
};

export default App;
