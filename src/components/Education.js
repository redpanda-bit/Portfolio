import React from 'react';

const Education = (props) => {

  return (
    <section id="education" className="ha-waypoint" data-animate-down="ha-header-small" data-animate-up="ha-header-small" style={styles.main}>
     <div style={styles.innerMain}>
        <div className="content-header" style={{zIndex: 9}}>
          <h2>Education</h2>
          <br/>
        </div>
	        <div className="content-body education-container" style={styles.schoolContainer}>
	          {/* EDUCATION 1 */}
	          <div className="hvr-glow" style={{margin: 10, fontSize: 16}}>
	            <div className="card-header">
	              <h3>Flatiron School</h3> <h3><span className="job-title">2017 - 2017</span></h3>
	            </div>
	            <div className="card-content">
	              <p>Software Engineer Immersive. <br /></p>
	            </div>
	          </div>
	          {/* EDUCATION 2 */}
	          <div className="hvr-glow" style={{margin: 10, fontSize: 16}}>
	            <div className="card-header">
	              <h3>Lehman College </h3> <h3><span className="job-title">2012 - 2016</span></h3>
	            </div>
	            <div className="card-content">
	              <p>Bachelors of Science in Dietetics, Foods and Nutrition. <br /></p>
	            </div>
	          </div>
	        </div>
	      </div>
	  </section> 
  )
}

const styles = {
  main: {
    display: 'flex',
    justifyContent: 'center'
  },
  innerMain: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    cursor: 'default',
    fontSize: "calc(2vw + 2vh)",
    textAlign: 'center',
    color: '#3e6fb2',
    padding: 0,
    overflow: 'visible'
  },
}

export default Education;
