import React from 'react';

const Education = (props) => {

  return (
	  <section id="education" className="ha-waypoint">
	    <div className="row white box-shadow">
	      <div className="side-content" />
	      <div className="main-content">
	        <div className="content-header">
	          <h2>Education</h2>
	        </div>
	        <div className="content-body">
	          {/* EDUCATION 1 */}
	          <div className="hvr-glow" style={{width: '100%'}}>
	            <div className="card-header">
	              <h4>Flatiron School <span className="job-title">2017 - 2017</span></h4>
	            </div>
	            <div className="card-content">
	              <p>Software Engineer Immersive. <br /></p>
	            </div>
	          </div>
	          <div className="hvr-glow" style={{width: '100%'}}>
	            <div className="card-header">
	              <h4>Lehman College <span className="job-title">2012 - 2016</span></h4>
	            </div>
	            <div className="card-content">
	              <p>Bachelors of Science in Dietetics, Foods and Nutrition. <br /></p>
	            </div>
	          </div>
	        </div>
	      </div>
	      <div className="side-content" />
	    </div>
	  </section> 
  )
}

export default Education;
