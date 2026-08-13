import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Location from "./pages/Location";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/locations" element={<Location />} />
        </Routes>

        <Footer />
        <WhatsAppButton />

      </div>
    </BrowserRouter>
  );
}

export default App;