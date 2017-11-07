import React from 'react';
import { Link } from 'react-router-dom'

const Jumbotron = (props) => {

  return (
    <section id="projects" className="ha-waypoint" data-animate-down="ha-header-small" data-animate-up="ha-header-shrink" style={styles.main}>
      <div style={styles.innerMain}>
        <div className="content-header" style={{zIndex: 9}}>
          <h2>Projects</h2>
          <br/>
        </div>
        <div className="projects-container" style={{transition: 'all 0.5s ease'}}>
          <div className="project" data-is-mobile-pressed={false} data-project-id={2} onClick={ props.isMobile ? (e) => props.handleProjectPress(e.target) : null} >
            <div className="project-icons-container ">
              <Link to="https://github.com/carlosalmonte04/macros-frontend" target="_blank">
                <i className="project-icon fa fa-github"/>
                <span className="project-icon-help">repo</span>
              </Link>
              <Link to="https://github.com/carlosalmonte04/macros-backend" target="_blank">
                <i className="project-icon fa fa-github"/>
                <span className="project-icon-help">api repo</span>
              </Link>
              <Link to="https://github.com/snigdhasur" target="_blank" >
                <i className="project-icon fa fa-github"/>
                <span className="project-icon-help">collaborator</span>
              </Link>
            </div>
            <a>
              <h2 className="" style={styles.project}>Macros</h2>
            </a>
            <div>
            </div>
          </div>
          <div className="project" data-is-mobile-pressed={false} data-project-id={1} onClick={ props.isMobile ? (e) => props.handleProjectPress(e.target) : null} >
            <div className="project-icons-container ">
              <a href="triggersDnaModal" id="dna-modal-trigger">
                <i className="project-icon fa fa-video-camera"/>
                <span className="project-icon-help">video demo</span>
              </a>
              <Link to="https://github.com/carlosalmonte04/dna" target="_blank">
                <i className="project-icon fa fa-github"/>
                <span className="project-icon-help">repo</span>
              </Link>
              <Link to="https://github.com/carlosalmonte04/ana-api" target="_blank">
                <i className="project-icon fa fa-github"/>
                <span className="project-icon-help">api repo</span>
              </Link>
            </div>
            <Link to="">
              <h2 className="" style={styles.project}>DNA</h2>
            </Link>
            <div>
              
            </div>
          </div>
          <div className="project" data-is-mobile-pressed={false} data-project-id={0} onClick={ props.isMobile ? (e) => props.handleProjectPress(e.target) : null} >
            <div className="project-icons-container ">
              <a href="triggersDhModal" id="dh-modal-trigger">
                <i className="project-icon fa fa-video-camera"/>
                <span className="project-icon-help">video demo</span>
              </a>
              <Link to="https://github.com/carlosalmonte04/dietitianhelp" target="_blank">
                <i className="project-icon fa fa-github"/>
                <span className="project-icon-help">repo</span>
              </Link>
              <Link to="http://dietitian.help" target="_blank">
                <i className="project-icon fa fa-eye"/>
                <span className="project-icon-help">website</span>
              </Link>
            </div>
            <Link to="">
              <h2 className="" style={styles.project}>Dietitian.Help</h2>
            </Link>
          </div>
          <div className="project" data-is-mobile-pressed={false} data-project-id={3} onClick={ props.isMobile ? (e) => props.handleProjectPress(e.target) : null} >
            <div className="project-icons-container ">
              <Link to="https://foodforthought-app.herokuapp.com/" target="_blank">
                <i className="project-icon fa fa-eye"/>
                <span className="project-icon-help">website</span>
              </Link>
              <Link to="https://github.com/carlosalmonte04/food-for-thought" target="_blank">
                <i className="project-icon fa fa-github"/>
                <span className="project-icon-help">repo</span>
              </Link>
            </div>
            <a>
              <h2 className="" style={styles.project}>Food For Thought</h2>
            </a>
            <div>
              
            </div>
          </div>
          <div className="project" data-is-mobile-pressed={false} data-project-id={4} onClick={ props.isMobile ? (e) => props.handleProjectPress(e.target) : null} >
            <div className="project-icons-container ">
              <Link to="https://github.com/carlosalmonte04/snake-frontend" target="_blank">
                <i className="project-icon fa fa-github"/>
                <span className="project-icon-help">repo</span>
              </Link>
            </div>
            <a>
              <h2 className="" style={styles.project}>Snake</h2>
            </a>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </section>  
  )
}

const styles = {
  main: {
    display: 'flex',
    justifyContent: 'center'
  },
  innerMain: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    cursor: 'default',
    fontSize: "calc(2vw + 2vh)",
    textAlign: 'center',
    color: '#3e6fb2',
    marginBottom: -56,
    width: '100%',
    padding: 0,
    overflow: 'visible'
  },
  project: {
    textAlign: 'left'
  },
  pContainer: {
    padding: 20,
    zIndex: 1,
    color: 'white',
    textAlign: 'left',
    backgroundColor: 'transparent',
    width: '80vw',
  },
  p: {
    fontSize: "calc(1.5vw + 1.5vh)",
    lineHeight: 1,
  },
}
export default Jumbotron;