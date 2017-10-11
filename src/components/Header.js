import React from 'react';
import post2 from '../assets/img/post2.png'
import post3 from '../assets/img/post3.png'
import post4 from '../assets/img/post4.png'
import post5 from '../assets/img/post5.png'
import logo from '../assets/img/CA Logo.png'


const Header = (props) => {

  return (
      <header id="ha-header" className="ha-header">
        <div className="ha-header-perspective">
          <div className="ha-header-front">
            <h1>
              <span>
                <img src={logo} style={{top: "-5px", height: "60px", position: "relative", transition: "all 0.5s ease"}} id="logo-on-header" className="animated" alt="logo for Carlos Almonte"/>
              </span>
            </h1>
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
              <a href="https://medium.com/@carlosalmonte04/intro-to-data-structures-binary-search-trees-65e54070647" target="_blank" className="post-holder hvr-glow">
                <div className="post-img" style={{backgroundImage: `url('${post5}')`, backgroundSize: 'cover'}}></div>
                <div className="post-title">Intro to Data Structures, Binary Search Trees</div>
              </a>
              <a href="https://medium.com/@carlosalmonte04/react-on-plain-javascript-terms-7521d00f0d99" target="_blank" className="post-holder hvr-glow">
                <div className="post-img" style={{backgroundImage: `url('${post4}')`, backgroundSize: 'cover'}}></div>
                <div className="post-title">React on Plain Javascript Terms</div>
              </a>
              <a href="https://medium.com/@carlosalmonte04/bleach-the-views-with-ajax-737443c6dc88" target="_blank" className="post-holder hvr-glow">
                <div className="post-img" style={{backgroundImage: `url('${post2}')`, backgroundSize: 'cover'}}></div>
                <div className="post-title">Bleach The Views With AJAX</div>
              </a>
              <a href="https://medium.com/@carlosalmonte04/tdd-why-use-it-7747e6e091c4" target="_blank" className="post-holder hvr-glow">
                <div className="post-img" style={{backgroundImage: `url('${post3}')`, backgroundSize: 'cover'}}></div>
                <div className="post-title">TDD, why use it?</div>
              </a>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header;