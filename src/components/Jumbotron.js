import React from 'react';
import background from '../assets/img/bg copy.jpg'
import logo from '../assets/img/CA Logo.png'

const Jumbotron = (props) => {

  return (
  <section className="cd-section jumbotron" id="jumbotron" style={{backgroundImage: `url('${background}')`, backgroundSize: "cover"}}>
    <div id="containLogoNameAndTitle" style={{position: "center", top: "150px"}}>
      <div className="jumbotron-text" style={{position: "absolute"}}>
      	<img src={logo} className="logo animated" style={{position: 'relative', display: 'none', width: '30%'}} alt="logo for Carlos Almonte"/>
        
        <div style={{width: "90%", margin: "0 0 0 5%"}}>
          <h1 id="jumbotron-full-name" className="fullName" style={{marginTop: "-20px", fontSize: "3em", width: "100%"}}>Carlos Almonte</h1>
        </div>
        <p id="jumbotron-full-title-and-location" className="animated fadeInDown"><a id="neon3" style={{cursor: "default"}}>
        Software Engineer&nbsp;</a>based in New York, USA.</p>
        <div className="jumbotron-social" style={{fontSize: ".6em"}}>
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
