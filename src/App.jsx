import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import ProjectDetail1 from "./components/pages/ProjectDetail1";
import ProjectDetail2 from "./components/pages/ProjectDetail2";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project1" element={<ProjectDetail1 />} />
        <Route path="/project2" element={<ProjectDetail2 />} />
      </Routes>
    </>
  );
}

export default App;
