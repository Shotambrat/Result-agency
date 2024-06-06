import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Brief from "./components/Brief";
import Cases from "./pages/Cases";
import Footer from "./pages/Footer";
import { Element } from "react-scroll";
import Cases from "./pages/Cases";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
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
