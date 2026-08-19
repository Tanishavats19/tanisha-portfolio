import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import InstagramCaseStudy from "./case-studies/InstagramCaseStudy";

export default function App() {
  return (
    <div id="top">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies/instagram-growth" element={<InstagramCaseStudy />} />
      </Routes>
    </div>
  );
}