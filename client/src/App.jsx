import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Upload from "./pages/Upload";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
    </BrowserRouter>
      

    </>
  );
}

export default App;
