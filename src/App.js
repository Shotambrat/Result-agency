import Cases from './pages/Cases';
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Main from "./pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/cases" element={<Cases />} />
            </Routes>
            <Footer />
        </BrowserRouter>
  );
}

export default App;
