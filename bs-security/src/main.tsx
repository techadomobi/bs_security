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

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/nebsarai" element={<NebSarai />} />
      <Route path="/chhatarpur" element={<Chhatarpur />} />
      <Route path="/saket" element={<Saket />} />
      <Route path="/greenpark" element={<GreenPark />} />
      <Route path="/vasantkunj" element={<VasantKunj />} />
      <Route path="/hauzkhas" element={<HauzKhas />} />
      <Route path="/ghitorni" element={<Ghitorni />} />
      <Route path="/malviyanagar" element={<MalviyaNagar />} />
      <Route path="/rajpur" element={<Rajpur />} />
      <Route path="/sultanpur" element={<Sultanpur />} />
      <Route path="/khanpur" element={<Khanpur />} />
    </Routes>
  </BrowserRouter>
);

const container = document.getElementById("root");
if (container) {
  createRoot(container).render(<App />);
}
