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
        <Route exact path="/" element={<Home/>}/>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/game" element={<Game />} />
          <Route exact path="/marketplace" element={<MarketPlace />} />
          <Route exact path="/finish" element={<Finish />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
