import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NebSarai from "./pages/NebSarai";
import Chhatarpur from "./pages/Chhatarpur";
import Saket from "./pages/Saket";
import GreenPark from "./pages/GreenPark";
import VasantKunj from "./pages/VasantKunj";
import HauzKhas from "./pages/HauzKhas";
import Ghitorni from "./pages/Ghitorni";
import MalviyaNagar from "./pages/MalviyaNagar";
import Rajpur from "./pages/Rajpur";
import Sultanpur from "./pages/Sultanpur";
import Khanpur from "./pages/Khanpur";
import Safdarjung from "./pages/Safdarjung";
import AIIMSArea from "./pages/AIIMSArea";
import SouthDelhi from "./pages/SouthDelhi";
import Mehrauli from "./pages/Mehrauli";
import GreaterKailash from "./pages/GreaterKailash";
import DefenceColony from "./pages/DefenceColony";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/nebsarai-delhi" element={<NebSarai />} />
      <Route path="/chhatarpur-delhi" element={<Chhatarpur />} />
      <Route path="/saket-delhi" element={<Saket />} />
      <Route path="/greenpark-delhi" element={<GreenPark />} />
      <Route path="/vasantkunj-delhi" element={<VasantKunj />} />
      <Route path="/hauzkhas-delhi" element={<HauzKhas />} />
      <Route path="/ghitorni-delhi" element={<Ghitorni />} />
      <Route path="/malviyanagar-delhi" element={<MalviyaNagar />} />
      <Route path="/rajpur-delhi" element={<Rajpur />} />
      <Route path="/sultanpur-delhi" element={<Sultanpur />} />
      <Route path="/khanpur-delhi" element={<Khanpur />} />
      <Route path="/safdarjung-delhi" element={<Safdarjung />} />
      <Route path="/aiimsarea-delhi" element={<AIIMSArea />} />
      <Route path="/southdelhi-delhi" element={<SouthDelhi />} />
      <Route path="/mehrauli-delhi" element={<Mehrauli />} />
      <Route path="/greaterkailash-delhi" element={<GreaterKailash />} />
      <Route path="/defencecolony-delhi" element={<DefenceColony />} />
    </Routes>
  </BrowserRouter>
);

const container = document.getElementById("root");
if (container) {
  createRoot(container).render(<App />);
}
