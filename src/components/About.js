import React from 'react';

const About = (props) => {

  return (
  <section id="about" className="about" style={styles.main}>
        <div id="particles" style={styles.particles} >
          <div className="row" style={styles.container}>
            <div className="content-header" style={{zIndex: 1, width: '80vw'}}>
            </div>
            <div className="about-body" style={styles.pContainer}>
              <p style={styles.p}>Inner passion for Software Engineering led me to become proficient in modern web and cross platform technologies such as React, React Native, Ruby on Rails, NodeJS and Express.</p>
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
    alignItems: 'center'
  },
  particles: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    cursor: 'default',
    fontSize: "calc(2vw + 2vh)",
    color: '#3e6fb2',
    width: '100%',
    padding: 0,
    overflow: 'visible',
  },
  pContainer: {
    padding: 20,
    zIndex: 1,
    textAlign: 'left',
    backgroundColor: 'transparent',
    width: '100%',
  },
  p: {
    fontSize: "calc(1vw + 1vh)",
    lineHeight: 1,
    textAlign: 'left'
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
