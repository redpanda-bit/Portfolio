import React from 'react';
import post2 from '../assets/img/post2.png'
import post3 from '../assets/img/post3.png'
import post4 from '../assets/img/post4.png'
import post5 from '../assets/img/post5.png'


const Header = (props) => {

  if (props.isMobile) {
    return(
      <div id="menu-container">
        <header style={{position: 'fixed', zIndex: 10}}>
          <div id="menuToggle" >
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <a ><li className="link-from-nav" style={{cursor: 'pointer'}} data-destination="jumbotron">home</li></a>
              <a ><li className="link-from-nav" style={{cursor: 'pointer'}} data-destination="about">about</li></a>
              <a href="https://medium.com/@carlosalmonte04"><li>Blog</li></a>
              <a ><li className="link-from-nav" style={{cursor: 'pointer'}} data-destination="projects">projects</li></a>
              <a ><li className="link-from-nav" style={{cursor: 'pointer'}} data-destination="education">education</li></a>
              <a ><li className="link-from-nav" style={{cursor: 'pointer'}} data-destination="skills">skills</li></a>
              <a ><li className="link-from-nav" style={{cursor: 'pointer'}} data-destination="contact">contact</li></a>
            </ul>
          </div>
        </header>
      </div>
    )
  } 
  else {
    return (
      <div id="menu-container">
        <header id="ha-header" className="ha-header">
          <div className="ha-header-perspective">
            <div className="ha-header-front">
              <div id="jumbotron-from-nav" className="link-from-nav animated" style={styles.logoOnHeader} data-destination="jumbotron">
                <span className="icon-ca-logo" data-destination="jumbotron"></span>            
              </div>
              <nav id="navLi" style={{float: 'right'}}>
                <a id="about-from-nav" className="link-from-nav" style={{cursor: 'pointer'}} data-destination="about">About</a>
                <a id="blog-from-nav" className="blog-from-nav extra-padding" data-destination="blog">Blog
                  <i id="blogDownArrow" className="fa fa-chevron-down" aria-hidden="true" /></a>
                <a id="projects-from-nav" style={{cursor: 'pointer'}} className="extra-padding link-from-nav" data-destination="projects">Projects</a>
                <a id="education-from-nav" style={{cursor: 'pointer'}} className="extra-padding link-from-nav" data-destination="education">Education</a>
                <a id="skills-from-nav" style={{cursor: 'pointer'}} className="extra-padding link-from-nav" data-destination="skills">Skills</a>
                <a id="contact-from-nav" className="link-from-nav" style={{cursor: 'pointer'}} data-destination="contact">Contact</a>
              </nav>
            </div>
            <div className="posts-carrier posts-container-container">
              <div id="posts-container" className="posts-container">
                <a href="https://medium.com/@carlosalmonte04/intro-to-data-structures-binary-search-trees-65e54070647" target="_blank" rel="noopener noreferrer" className="post-holder hvr-glow">
                  <div className="post-img" style={{backgroundImage: `url('${post5}')`, backgroundSize: 'cover'}}></div>
                  <div className="post-title">Intro to Data Structures, Binary Search Trees</div>
                </a>
                <a href="https://medium.com/@carlosalmonte04/react-on-plain-javascript-terms-7521d00f0d99" target="_blank" rel="noopener noreferrer" className="post-holder hvr-glow">
                  <div className="post-img" style={{backgroundImage: `url('${post4}')`, backgroundSize: 'cover'}}></div>
                  <div className="post-title">React on Plain Javascript Terms</div>
                </a>
                <a href="https://medium.com/@carlosalmonte04/bleach-the-views-with-ajax-737443c6dc88" target="_blank" rel="noopener noreferrer" className="post-holder hvr-glow">
                  <div className="post-img" style={{backgroundImage: `url('${post2}')`, backgroundSize: 'cover'}}></div>
                  <div className="post-title">Bleach The Views With AJAX</div>
                </a>
                <a href="https://medium.com/@carlosalmonte04/tdd-why-use-it-7747e6e091c4" target="_blank" rel="noopener noreferrer" className="post-holder hvr-glow">
                  <div className="post-img" style={{backgroundImage: `url('${post3}')`, backgroundSize: 'cover'}}></div>
                  <div className="post-title">TDD, why use it?</div>
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

const styles = {
  logoOnHeader: {
    cursor: 'pointer',
    transition: "all 0.5s ease",
    fontSize: 65,
    display: 'inline-flex',
    height: "100%",
    justifyContent: 'center'
  }
}


export default Header;