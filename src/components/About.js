import React from 'react';

const About = (props) => {

  return (
  <section id="about" className="ha-waypoint" data-animate-down="ha-header-small" data-animate-up="ha-header-shrink" style={{zIndex: 0}}>
        <div className="row box-shadow" style={{backgroundColor: 'white'}}>
          <div className="side-content" />
          <div className="main-content">
            <div className="content-header">
              <h2> <a style={{cursor: 'default'}}>About</a></h2>
              <p />
            </div>
            <div className="content-body" style={{color: 'black', textAlign: 'left'}}>
              <p>Inner passion for Software Engineering led me to become proficient in modern web technologies such as React, React Native, Ruby on Rails, NodeJS and Express.</p>
              <p>Currently looking for a new challenge.</p>
              <p>Feel free to get in touch with me through email using the contact box at the end of this page, or any media link provided above.</p>
              <p>Thanks for stopping by!</p>
            </div>
            <div className="wrapper typo" />
          </div>
          <div className="side-content" />
        </div>
      </section>
  )
}

export default About;
