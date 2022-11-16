import './App.css';
import Game from "./pages/Game";
import MarketPlace from "./pages/MarketPlace";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Finish from "./pages/Finish";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route index element={<Home/>}/>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="game" element={<Game />} />
          <Route path="marketplace" element={<MarketPlace />} />
          <Route path="finish" element={<Finish />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
