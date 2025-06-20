import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./components/Footer";
import Projects from "./Pages/Projects.jsx";
import Preloader from "./components/PreLoader.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx"; // ✅ Adjust path if needed

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <ThemeProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
