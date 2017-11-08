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
    isMobile: false,
    webApp: null
  }

  showTheMagic = () => {
    setTimeout(function() {
      document.getElementById('preloader').className = "animated fadeOut"
    }, 1000)
    setTimeout( function() {
      document.getElementById('preloader').remove()
    }, 1500)
  }

  addMoreDynamicEls = () => {
    window.addParticles()
    window.particlesToggle(window.scrollY)
    // window.particleground(document.getElementById('particles'), {
    //   dotColor: '#264883',
    //   lineColor: '#3059a3'
    // });
    window.starsToggle(window.scrollY)
  }

  projectHoverOn = (project, projectIcons) => {
    this.allProjectsHoverOff()
    projectIcons.style.opacity = 1
    projectIcons.style.transform = "translateY(-40px)"
    project.dataset.isMobilePressed = "true"
  }

  projectHoverOff = (project, projectIcons) => {
    projectIcons.style.opacity = 0
    projectIcons.style.transform = "translateY(0px)"  
    project.style.transform = "translateY(0) scale(1);"
    project.dataset.isMobilePressed = "false"
  }

  allProjectsHoverOff = () => {
    const projects = window.projectsCont.children

    for (let i = 0; i < projects.length; i++) {
      this.projectHoverOff(projects[i], projects[i].children[0])
    }
  }

  handleProjectPress = (projectTitleEl) => {
    // ARGUMENT IS THE h2 PROJECT TITLE
    const projectEl = projectTitleEl.parentElement.parentElement
    const projectIconsCont = projectEl.children[0]
    const { projectId, isMobilePressed } = projectEl.dataset

    if (isMobilePressed === "true") {
      this.allProjectsHoverOff()
    }
    else {
      this.projectHoverOn(projectEl, projectIconsCont)
    }
  }

  _renderMouseParticle = () => {
    return(
      <div id="large-header" className="large-header animated" style={{position: 'fixed', height: window.innerHeight, width: (window.innerWidth * 0.9), zIndex: -1}}>
        <canvas id="demo-canvas"></canvas>
      </div>
    ) 
  }

  _renderBackground = () => {
    return(
      <div id="background" style={styles.background}/>
    ) 
  }

  _renderPreloader = () => {
    return(
      <div id="preloader" className="animated fadeIn" style={styles.preloader}/>
    ) 
  }
// 
  componentDidMount() {
    if (!this.state.didWebAppInit) {

      setTimeout(() => {
        this.setState({
          isLoading: false, 
          isMobile: !!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ),
        }, this.showTheMagic)
      } ,800)
    }
  }

  componentDidUpdate() {
    if(!this.state.isLoading && !this.state.isPageSettled) {

      this.state.isMobile ? null : (window.initDynamicEls() && this.addMoreDynamicEls() )

      this.setState({isPageSettled: true})
    }
  }

  render() {
    return (
      <div className="App">
        {this._renderPreloader()}
        {this._renderBackground()}
        <div style={{opacity: this.state.isLoading && !this.state.isPageSettled ? 0 : 1}}>
        {!this.state.isMobile ? this._renderMouseParticle() : null}
          <Header isMobile={this.state.isMobile}/>
          <Jumbotron />
          {/*<About />*/}
          <Projects isMobile={this.state.isMobile} handleProjectPress={this.handleProjectPress}/>
          <Education isMobile={this.state.isMobile} />
          <Skills />
          <Contact />
        </div>
      </div>
    )
  }
}

const styles = {
  background: {
    position: 'fixed', 
    backgroundImage: `url('/bg-small.jpg')`, 
    backgroundSize: 'cover', 
    height: '100%', 
    width: '100%', 
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat', 
    zIndex: -9
  },
  preloader: {
    position: 'fixed',
    zIndex: 99,
    backgroundImage: `url('/bg-preloader.gif')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100%', 
    width: '100%',
    backgroundRepeat: 'no-repeat'
  }
}

export default App;
