import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/general/header';
import Footer from './components/general/footer';
import BackgroundSlideshow from './components/general/background_slideshow';
import Home from './components/pages/home';
import About from './components/pages/about';
import Projects from './components/pages/projects';
import Contact from './components/pages/contact';

import './components/general/general.css';
import './components/general/nav_bar.css';

const App = () => (
  <Router>
    <div className="app-container">
      <Header />
      <BackgroundSlideshow />
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/resume" element={<Resume />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
