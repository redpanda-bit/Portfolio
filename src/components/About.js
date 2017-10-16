import React from 'react';

const About = (props) => {

  return (
  <section id="about" className="ha-waypoint" data-animate-down="ha-header-small" data-animate-up="ha-header-shrink" style={styles.main}>
        <div id="particles" style={styles.particles} >
          <div className="row" style={styles.container}>
            <div className="content-header" style={{zIndex: 1, width: '80vw'}}>
              <h2 className="d3-effect" style={styles.header}>About&nbsp;</h2>
              <p />
            </div>
            <div className="content-body d3-effect" style={styles.pContainer}>
              <p style={styles.p}>Inner passion for Software Engineering led me to become proficient in modern web technologies such as React, React Native, Ruby on Rails, NodeJS and Express.</p>
              <p style={styles.p}>Feel free to get in touch with me either using the contact box at the end of this page or any media link provided above.</p>
              <p style={styles.p}>Thank you for stopping by.</p>
            </div>
          </div>
        </div>
      </section>
  )
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'column',
    width: '61vw',
    backgroundColor: 'transparent',
    marginTop: 100,
    alignItems: 'center'
  },
  particles: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    cursor: 'default',
    fontSize: "calc(5vw + 5vh)",
    textAlign: 'center',
    color: '#3e6fb2',
    marginBottom: -56,
    width: '100%',
    padding: 0,
    overflow: 'visible',
  },
  pContainer: {
    padding: 20,
    zIndex: 1,
    color: 'white',
    textAlign: 'left',
    backgroundColor: 'transparent',
    width: '100%',
    marginTop: '4vh',
  },
  p: {
    fontSize: "calc(1.5vw + 1.5vh)",
    lineHeight: 1,
  },
  div: {
    position: 'absolute',
    zIndex: 0,
    background: 'linear-gradient(#fff, #e8ebeb)',
    width: window.innerWidth * 0.5,
    height: window.innerHeight * 0.8,
    alignSelf: 'flex-start',
    top: 24,
    left: -51,
    perspective: 200,
    transform: "rotateX(-19deg) rotateY(1deg)"

  }
}

export default About;
