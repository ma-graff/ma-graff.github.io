import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './i18n';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PageTransition } from './components/PageTransition';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Experience } from './pages/Experience';
import { Contact } from './pages/Contact';
import { useDocumentTitle } from './hooks/useDocumentTitle';
import './styles/index.css';

function AppContent() {
  useDocumentTitle();
  const location = useLocation();

  return (
    <>
      <Navbar />
      <main>
        <PageTransition key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <AppContent />
      </HashRouter>
    </LanguageProvider>
  );
}

export default App;
