import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Home   from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <a
        href="#main-content"
        style={{
          position: "absolute", left: "-9999px",
          top: "auto", width: "1px", height: "1px", overflow: "hidden",
        }}
        onFocus={e => Object.assign(e.target.style, { left: "8px", top: "8px", width: "auto", height: "auto" })}
        onBlur={e => Object.assign(e.target.style, { left: "-9999px", top: "auto", width: "1px", height: "1px" })}
      >
        Skip to main content
      </a>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here as the site grows */}
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}