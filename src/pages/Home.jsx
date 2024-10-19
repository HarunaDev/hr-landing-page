import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Services from '../components/Services';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
