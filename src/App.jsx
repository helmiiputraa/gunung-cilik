import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Fasilitas from './components/Fasilitas/Fasilitas';
import Galeri from './components/Galeri/Galeri';
import Lokasi from './components/Lokasi/Lokasi';
import Kontak from './components/Kontak/Kontak';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <Fasilitas />
        <Galeri />
        <Lokasi />
        <Kontak />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
