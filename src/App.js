import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Jumbotron from './components/Jumbotron'
import About from './components/About'
import Projects from './components/Projects'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'
import { Route } from 'react-router-dom';

class App extends Component {

  state = {
    isLoading: true,
    isPageSettled: false,
    isMobile: false
  }

  noMoreDynamicEls = () => {
    return null
  }

  addMoreDynamicEls = () => {
    window.addParticles()
    window.particlesToggle(window.scrollY)
    window.particleground(document.getElementById('particles'), {
      dotColor: '#264883',
      lineColor: '#3059a3'
    });
    window.starsToggle(window.scrollY)
  }

  showTheMagic = () => {
    setTimeout(function() {
      document.getElementById('preloader').className = "animated fadeOut"
    }, 1000)
    setTimeout( function() {
      document.getElementById('preloader').style = "display: none"  
    }, 1500)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false, 
        isMobile: !!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
      })
    } ,800)
  }
  componentDidUpdate() {
    if(!this.state.isLoading && !this.state.isPageSettled) {
      // AS EASY AS:
      window.initDynamicEls() // 1

      this.state.isMobile ? this.noMoreDynamicEls() : this.addMoreDynamicEls() // 2 
       
      this.showTheMagic() // 3

      this.setState({isPageSettled: true})
    }
  }
  _renderApp = () => {
    return (
      <div className="App" >
        <div id="preloader" className="animated fadeIn" style={{position: 'fixed', zIndex: 99, backgroundImage: `url('/bg-preloader.gif')`, backgroundPosition: 'center', backgroundSize: 'cover', height: '100%', width: '100%', backgroundRepeat: 'no-repeat'}}/>
        <div id="background" style={{position: 'fixed', backgroundImage: `url('/bg.jpg')`, backgroundSize: 'cover', height: '100%', width: '100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', zIndex: -9}}/>
        <div style={{opacity: this.state.isLoading ? 0 : 1}}>
          <div id="large-header" className="large-header animated" style={{position: 'fixed', height: window.innerHeight, zIndex: -1}}>
            <canvas id="demo-canvas"></canvas>
          </div>
          <Header />
          <Jumbotron />
          <About />
          <Projects />
          <Education />
          <Skills />
          <Contact />
        </div>
      </div>
    ) 
  }

  render() {
    return (
      this._renderApp()
    )
  }
}

export default App;
