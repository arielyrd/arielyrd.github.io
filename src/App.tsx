import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import CertificatePage from "./pages/CertificatePage";
import ExperiencePage from "./pages/ExperiencePage";
import ResumePage from "./pages/ResumePage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-ink-950 text-white">
        <Navbar />

        <main className="pt-20 md:pt-24">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/certificate" element={<CertificatePage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/cv" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
// TEST APP
export default App;
