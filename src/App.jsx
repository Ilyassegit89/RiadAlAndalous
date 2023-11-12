import Nav from "./components/Nav";
import Home from "./pages/HomePage.jsx";
import About from "./pages/AboutPage";
import Galerie from './pages/GaleriePage';
import Footer from './components/Footer';
import Menu from './pages/MenuPage';
import Contact from "./pages/ContactPage";
import BookPage from "./pages/BookPage.jsx";
import {Routes, Route} from 'react-router-dom'

export function App() {

  return (
      <>
          <Nav />
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Galerie" element={<Galerie />} />
              <Route path="/Menu" element={<Menu />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Booking" element={<BookPage />} />


          </Routes>
          <Footer />
      </>
    )
}


