import React from 'react';

const Skills = (props) => {

  return (
    <section id="skills" className="ha-waypoint" data-animate-down="ha-header-small" data-animate-up="ha-header-small" style={styles.main}>
      <div style={styles.innerMain}>
        <div className="content-header" style={{zIndex: 9}}>
          <h2 className="d3-effect" style={styles.header}>Skills</h2>
          <br/>
        </div>
        <div className="content-body d3-effect width" style={{marginTop: '6vh'}}>
          <p style={styles.p}>React React Native Redux Javascript JQuery Ruby on Rails SQL NodeJS Express MongoDB Github Heroku
          </p>
        </div>
      </div>
    </section>
  )
}

const styles = {
  main: {
    display: 'flex',
    marginTop: 150,
    justifyContent: 'center'
  },
  innerMain: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 100
  },
  header: {
    cursor: 'default',
    fontSize: "calc(5vw + 5vh)",
    textAlign: 'center',
    color: '#3e6fb2',
    marginBottom: -56,
    width: '100%',
    padding: 0,
    overflow: 'visible'
  },
  p: {
    lineHeight: 1,
    fontSize: 'calc(3vw + 3vh)',
    textAlign: 'center',
  }
}

export default Skills;
