import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Brief from "./components/Brief";
import Cases from "./pages/Cases";
import Footer from "./pages/Footer";
import { Element } from "react-scroll";
import NavMenu from "./components/NavMenu";
import { useState } from "react";
import FixedBackground from "./components/FixedBackground";
import cookies from "js-cookie";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const openNavMenu = () => {
    setIsNavOpen(true);
  };

  const closeNavMenu = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="App">
      <FixedBackground />
      <BrowserRouter>
        <Header handleOpen={openNavMenu} />
        <NavMenu isNavOpen={isNavOpen} handleClose={closeNavMenu} />
        <Routes>
          <Route path="/" element={<Navigate to={`/${cookies.get("i18next") || "ru"}`} />} />
          <Route path="/:lang" element={<Home />} />
          <Route path="/:lang/blog/:blogId" element={<Blog />} />
          <Route path="/:lang/cases/:caseId" element={<Cases />} />
        </Routes>
        <Brief />
        <Element name="contacts">
          <Footer />
        </Element>
      </BrowserRouter>
    </div>
  );
}

export default App;