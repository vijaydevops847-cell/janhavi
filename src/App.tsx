import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Hero />
        <Categories />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;