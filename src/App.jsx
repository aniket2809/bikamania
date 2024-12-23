import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import AboutusPage from "./components/AboutusPage.jsx";
import GalleryPage from "./components/GalleryPage.jsx";
import ContactusPage from "./components/ContactusPage.jsx";
import BlogsPage from "./components/BlogsPage.jsx";
import FAQPage from "./components/FAQPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutusPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/FAQ" element={<FAQPage />} />
        <Route path="/contactus" element={<ContactusPage />} />
      </Routes>
    </BrowserRouter>
  );
}