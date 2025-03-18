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
import DetailMoile from "./template/pages/detail/DetailMobile.tsx";
import DetailConsultant from "./template/pages/detail/DetailConsultant.tsx";
import DetailFlyers from "./template/pages/detail/DetailFlyers.tsx";
import DetailInstallation from "./template/pages/detail/DetailInstallation.tsx";
import DetailMarketing from "./template/pages/detail/DetailMarketing.tsx";
import DetailHebergement from "./template/pages/detail/DetailHebergement.tsx";
import DetailFormation from "./template/pages/detail/DetailFormation.tsx";
import DetailDomotique from "./template/pages/detail/DetailDomotique.tsx";

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
        <Route path="/detail-mobile" element={<DetailMoile />} />
        <Route path="/detail-consulting" element={<DetailConsultant />} />
        <Route path="/detail-flyers" element={<DetailFlyers />} />
        <Route path="/detail-installation" element={<DetailInstallation />} />
        <Route path="/detail-marketing" element={<DetailMarketing />} />
        <Route path="/detail-hebergement" element={<DetailHebergement />} />
        <Route path="/detail-formation" element={<DetailFormation />} />
        <Route path="/detail-domotique" element={<DetailDomotique />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
