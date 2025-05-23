import Header from './components/Header';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import Team from './components/Team';

import Footer from './components/Footer';
import Contact from './components/Contact';
import './index.css';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Team />
        <Clients />
        <Contact/>

      </main>
      <Footer />
    </div>
  );
}

export default App;

