import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";

const App= () => {
  const [pivot, setPivot] = useState(1);
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
