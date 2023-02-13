import "./App.css";
import { Route, Routes, Link, NavLink, BrowserRouter } from "react-router-dom";
import Header from "./screens/Header";
import Footer from "./screens/Footer";
import Section from "./screens/Section";
import Home from "./screens/Home";
import Navbar from "./screens/Navbar";
import Projects from "./screens/Projects";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cansu AYADA</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/header" element={<Header />} />
          <Route path="/section" element={<Section />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
