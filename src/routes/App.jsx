import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/about/About";
import Home from "../pages/home/Home";

const App = ({ pivot, setPivot }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              pivot={pivot}
              setPivot={(a) => {
                setPivot(a);
              }}
            />
          }
        />
        <Route path="/about" element={<About pivot={pivot}
              setPivot={(a) => {
                setPivot(a);
              }}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
