import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Footer from '../components/Footer';
import Skills from '../components/Skills';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Certifications />
      
      <Skills />
      <Footer />
    </>
  );
}

export default Home;