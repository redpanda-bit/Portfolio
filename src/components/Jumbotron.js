import React from 'react';

const Jumbotron = (props) => {

  return (
  <section className="jumbotron ha-waypoint" id="jumbotron" data-animate-down="ha-header-small" data-animate-up="ha-header-shrink" style={{display: 'flex', flexDirection: 'row', zIndex: 2}}>
    <div id="jumbotron-text" className="jumbotron-text d3-effect">
    	<div id="logo" style={{position: 'relative', fontSize: 'calc(20vw + 20vh)'}} alt="logo for Carlos Almonte">
        <span className="icon-ca-logo"></span>
      </div>
      <div className="text-container" style={{zIndex: 1}}>
        <div>
          <h1 style={{fontSize: "calc(4vw + 4vh)", textAlign: 'center', fontFamily: "Raleway"}}>Carlos Almonte</h1>
        </div>
        <h4 style={{fontSize: "calc(1.5vw + 1.5vh)", display: 'flex', flexDirection: 'row'}}><a id="neon3" style={{cursor: "default"}}>Software Developer&nbsp;</a>based in New York, USA.</h4>
        <div className="jumbotron-social" style={{fontSize: ".6em", width: "150%"}}>
          <ul className="ul-social">
            <li className="li-social-links">
              <a className="social" href="https://github.com/carlosalmonte04" target="_blank" rel="noopener noreferrer" content="null"><i className="fa fa-github fa-inverse"></i></a>
            </li>
            <li className="li-social-links">
              <a className="social" href="https://linkedin.com/in/carlos-almonte-177a18aa/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-inverse"></i></a>
            </li>
            <li className="li-social-links">
              <a className="social" href="https://medium.com/@carlosalmonte04" target="_blank" rel="noopener noreferrer"><i className="fa fa-medium fa-inverse"></i></a>
            </li>
          </ul>
        </div>
        <div style={{fontSize: ".5em"}} className="link-from-nav" data-destination="about" >
          <span id="down-arrow" >
          	<a id="aboutFromJumbotron" style={{cursor: "pointer"}}>
          		<i className="fa fa-chevron-down fa-inverse link-from-nav" data-destination="about"/>
          	</a>
          </span>
        </div>
      </div>
    </div>
  </section>   
  )
}

export default Jumbotron;
