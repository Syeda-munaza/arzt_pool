import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./pages/Navbar";
import Sidebar from "./pages/Sidebar";
import Section from "./pages/Section";
import Home from "./pages/Home";






export default function App() {
  return (
    <>
  <Navbar />
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/section" element={<Section />} />

      </Routes>

    </>
  );
}
