import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Volunteering from './components/Volunteering';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <About />
      <Work />
      <Volunteering />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
