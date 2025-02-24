import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import ProjectList from './components/ProjectList';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Skills />
        <ProjectList />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
