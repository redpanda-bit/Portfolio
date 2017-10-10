import React from 'react';
import project1 from '../assets/img/project1.png'
import project2 from '../assets/img/project2.png'
import project3 from '../assets/img/project3.png'
import project4 from '../assets/img/project4.png'
import project5 from '../assets/img/project5.png'
import project6 from '../assets/img/project6.png'

const Jumbotron = (props) => {

  return (
    <section id="projects" className="ha-waypoint" data-animate-down="ha-header-small" data-animate-up="ha-header-shrink">
      <div className="row">
        <div className="side-content" />
        <div className="main-content">
          <div className="content-header">
            <h2>Projects</h2>
            <br />
          </div>
          <div className="content-body" />
          {/* CARD 1 */}
          <div className="example-1 card">
            <div className="wrapper" style={{backgroundImage: `url('${project1}')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: '52% -39px'}}>
              <div className="date">
                <span><i className="day fa fa-desktop" /></span>
                <span className="day">RoR</span>
              </div>
              <div className="data">
                <div className="content">
                  <h1 className="title"><a>Dietitian.help</a></h1>
                  <p className="text">Fullstack Ruby on Rails application using SQL, Github and Heroku and multiple frontend libraries.</p>
                  <label htmlFor="show-menu-1" className="menu-button"><span /></label>
                </div>
                <input type="checkbox" id="show-menu-1" />
                <ul className="menu-content">
                  <li>
                    <a href="triggersVideoModal" id="dh-modal-trigger">
                    <i  className="fa fa-video-camera" />
                    </a>
                  </li>
                  <li><a href="http://dietitian.help" className="fa fa-eye" target="_blank" rel="noopener noreferrer" />
                  </li>
                  <li><a href="https://github.com/carlosalmonte04/DietitianHelp" className="fa fa-github" target="_blank" rel="noopener noreferrer" /></li>
                </ul>
              </div>
            </div>
          </div>
          {/* CARD 2 */}
          <div className="example-1 card">
            <div className="wrapper" style={{backgroundImage: `url('${project2}')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: '52%'}}>
              <div className="date">
                <span><i className="day fa fa-mobile" /></span>
                <span className="day">MERN</span>
              </div>
              <div className="data">
                <div className="content">
                  <h1 className="title" style={{textAlign: 'center'}}><a>DNA</a></h1>
                  <p className="text">Mobile application built using MongoDB, Express, React Native and NodeJS.</p>
                  <label htmlFor="show-menu-2" className="menu-button"><span /></label>
                </div>
                <input type="checkbox" id="show-menu-2" />
                <ul className="menu-content">
                  <li>
                    <a id="dna-modal-trigger" className="fa fa-video-camera" />
                  </li>
                  <li><a href="https://github.com/carlosalmonte04/DNA" className="fa fa-github" target="_blank" rel="noopener noreferrer" /></li>
                  <li><a href="https://github.com/carlosalmonte04/ANA-api" className="fa fa-github" target="_blank" rel="noopener noreferrer"><span>API</span></a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* CARD 3 */}
          <div className="example-1 card">
            <div className="wrapper" style={{backgroundImage: `url('${project3}')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: '49% 53px'}}>
              <div className="date">
                <span><i className="day fa fa-desktop" /></span>
                <span className="day">ReactJS</span>
                <span className="year">+</span>
                <span className="month">RoR</span>
              </div>
              <div className="data">
                <div className="content">
                  <h1 className="title"><a>Macros</a></h1>
                  <p className="text">Collaborated with a talented engineer to create a ReactJS and RoR application using two external APIs to enable the core functionality.
                    <br /></p>
                  <label htmlFor="show-menu-3" className="menu-button"><span /></label>
                </div>
                <input type="checkbox" id="show-menu-3" />
                <ul className="menu-content">
                  <li>
                    <a href="https://github.com/carlosalmonte04/macros-frontend" className="fa fa-github" />
                  </li>
                  <li><a href="https://github.com/carlosalmonte04/macros-backend" className="fa fa-github"><span>API</span></a></li>
                  <li><a href="https://github.com/snigdhasur" className="fa fa-user"><span>Collaborator</span></a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* CARD 4 */}
          <div className="example-1 card">
            <div className="wrapper" style={{backgroundImage: `url('${project4}')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: '73% -28px'}}>
              <div className="date">
                <span><i className="day fa fa-desktop" /></span>
                <span className="day">RoR</span>
              </div>
              <div className="data">
                <div className="content">
                  <h1 className="title"><a>Food For Thought</a></h1>
                  <p className="text">Collaborated with a team of engineers to create a fullstack Ruby on Rails application.</p>
                  <label htmlFor="show-menu-4" className="menu-button"><span /></label>
                </div>
                <input type="checkbox" id="show-menu-4" />
                <ul className="menu-content">
                  <li>
                    <a href="http://foodforthought-app.herokuapp.com" className="fa fa-eye" />
                  </li>
                  <li><a href="https://github.com/carlosalmonte04/food-for-thought" className="fa fa-github"></a></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
          {/* CARD 5 */}
          <div className="example-1 card">
            <div className="wrapper" style={{backgroundImage: `url('${project5}')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: '10%'}}>
              <div className="date">
                <span><i className="day fa fa-desktop" /></span>
                <span className="day">JS</span>
              </div>
              <div className="data">
                <div className="content">
                  <h1 className="title"><a>Snake Game</a></h1>
                  <p className="text">Collaborated with a team of engineers to create a Javascript snake game using Object Orientation.</p>
                  <label htmlFor="show-menu-5" className="menu-button"><span /></label>
                </div>
                <input type="checkbox" id="show-menu-5" />
                <ul className="menu-content">
                  <li></li>
                  <li>
                    <a href="https://github.com/carlosalmonte04/snake-frontend" className="fa fa-github" />
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
          {/* CARD 6 */}
          <div className="example-1 card">
            <div className="wrapper" style={{backgroundImage: `url('${project6}')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: '52% 34px'}}>
              <div className="date">
                <span><i className="day fa fa-desktop" /></span>
                <span className="day">ReactJS</span>
              </div>
              <div className="data">
                <div className="content">
                  <h1 className="title"><a>Luke's Beer</a></h1>
                  <p className="text">Collaborated with an engineer to create a ReactJS frontend web application.</p>
                  <label htmlFor="show-menu-6" className="menu-button"><span /></label>
                </div>
                <input type="checkbox" id="show-menu-6" />
                <ul className="menu-content">
                  <li>
                  </li>
                  <li><a href="https://github.com/carlosalmonte04/lukes-beer" className="fa fa-github"></a></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>  
  )
}

export default Jumbotron;
