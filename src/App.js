import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Hero";
import Contact from "./Pages/Contact";
import { Routes, Route } from "react-router-dom";
import "./App.css"; // Global styles

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
