import React from 'react';

const ProjectCard = (props) => {

  return (
    <div className="example-1 card">
      <div className="wrapper" style={{backgroundImage: 'url('${props.image}')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: '52% -39px'}}>
        <div className="date">
          <span><i className="day fa fa-desktop" /></span>
          <span className="day">{props.technology}</span>
        </div>
        <div className="data">
          <div className="content">
            <h1 className="title"><a>{props.name}</a></h1>
            <p className="text">{props.description}</p>
            <label htmlFor="show-menu-1" className="menu-button"><span /></label>
          </div>
          <input type="checkbox" id="show-menu-1" />
          <ul className="menu-content">
            <li>
              <a href="triggersVideoModal" id="dh-modal-trigger">
              <i  className="fa fa-video-camera" />
              </a>
            </li>
            <li><a href="http://dietitian.help"  target="_blank" rel="noopener noreferrer" />
              <i className="fa fa-eye"/>
            </li>
            <li><a href="https://github.com/carlosalmonte04/DietitianHelp" className="fa fa-github" target="_blank" rel="noopener noreferrer" /></li>
          </ul>
        </div>
      </div>
    </div>  
  )
}

export default ProjectCard;
