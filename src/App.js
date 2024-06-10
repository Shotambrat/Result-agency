import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Brief from "./components/Brief";
import Cases from "./pages/Cases";
import Footer from "./pages/Footer";
import { Element } from "react-scroll";
import NavMenu from "./components/NavMenu";
import { useState } from "react";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Header isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>
        <NavMenu isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog/:blog" element={<Blog />}></Route>
          <Route path="/cases" element={<Cases />}></Route>
        </Routes>
        <Brief />
        {/* <MapFooter /> */}
        <Element name="contacts">
          <Footer />
        </Element>
      </BrowserRouter>
    </div>
  );
}

export default App;
