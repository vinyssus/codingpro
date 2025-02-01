import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./template/pages/home/Home.tsx";
import Contact from "./template/pages/contact/Contact.tsx";
import About from "./template/pages/about/About.tsx";
import Portfolio from "./template/pages/portfolio/Portfolio.tsx";
import Header from "./template/structure/navbar/Header.tsx";
import Team from "./template/pages/team/Team.tsx";
import News from "./template/pages/news/News.tsx";
import Footer from "./template/structure/footer/Footer.tsx";
import DetailWeb from "./template/pages/detail/DetailWeb.tsx";
import Chatbot from "./chatbot/Chatbot.tsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/team" element={<Team />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail-web" element={<DetailWeb />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
