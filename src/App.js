import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Jumbotron from './components/Jumbotron'
import About from './components/About'
import Projects from './components/Projects'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Jumbotron />
        <About />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </div>
    );
  }
}

export default App;
