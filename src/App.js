import Game from "./pages/Game";
import MarketPlace from "./pages/MarketPlace";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Finish from "./pages/Finish";
import Play from "./pages/Play";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Powerup from "./components/Powerup";
import { useState } from "react";

function App() {
  const [address , setAddress] = useState(" ")

  return (
    <>
    <BrowserRouter>
      <Routes> 
        <Route exact path="/" element={<Home />} />              
          <Route exact path="/dashboard" element={<Dashboard abcd={address} />} />
          <Route exact path="/game" element={<Game />} />
          <Route exact path="/marketplace" element={<MarketPlace />} />
          <Route exact path="/finish" element={<Finish />} />
          <Route exact path="/marketplace/powerup" component={<Powerup/>} />
          <Route exact path="/play" element={<Play/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
