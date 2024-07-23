import React from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {

  return (
    <React.Fragment>
      <Navbar/>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </React.Fragment>
  );
}

export default App;
