import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComp from './Components/NavbarComp';
import Home from './Pages/Home';
import LatestPage from './Pages/Latest';
import FeaturedPage from './Pages/FeaturedPage';
import Contact from './Pages/Contact';
import LeaksArticle from './Pages/GameLeaks';
import ShinyArticle from './Pages/ShinyHunting';
import Map from './Pages/maps'

const App = () => {
  return (
    <Router>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/featured" element={<FeaturedPage />} />
        <Route path="/latest" element={<LatestPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/articles/game-leaks' element={<LeaksArticle />} />
        <Route path='/articles/shiny-hunt' element={<ShinyArticle />} />
        <Route path='/articles/map' element={<Map />} />
      </Routes>
    </Router>
  );
};

export default App;