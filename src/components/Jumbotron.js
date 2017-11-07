import React from 'react';

const Jumbotron = (props) => {

  return (
  <section id="jumbotron" className="jumbotron">
    <div id="jumbotron-text" className="jumbotron-text">
      <div className="text-container" style={{zIndex: 1}}>
        <div>
          <h1 style={{fontSize: "calc(4vw + 4vh)", textAlign: 'center', fontFamily: "Raleway"}}>Carlos Almonte</h1>
        </div>
    	<div id="logo">
        <span className="icon-ca-logo" style={{fontSize: 'calc(6vw + 6vh)'}}></span>
      </div>
        <div className="jumbotron-social" style={{fontSize: ".6em", width: "150%"}}>
          <ul className="ul-social">
            <li className="li-social-links">
              <a className="social" href="https://github.com/carlosalmonte04" target="_blank" rel="noopener noreferrer" content="null"><i className="fa fa-github"></i></a>
            </li>
            <li className="li-social-links">
              <a className="social" href="https://linkedin.com/in/carlos-almonte-177a18aa/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
            </li>
            <li className="li-social-links">
              <a className="social" href="https://medium.com/@carlosalmonte04" target="_blank" rel="noopener noreferrer"><i className="fa fa-medium"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>   
  )
}

export default Jumbotron;
