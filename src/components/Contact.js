import React from 'react';

const Skills = (props) => {

  return (
    <section id="contact" className="ha-waypoint" style={{marginTop: 200, width: "102%"}}>
      <div className="row dark-gray">
        <div className="main-content" style={{flex: 1}}>
          <div className="content-header">
            <h2 className="white-text">Contact Me</h2>
          </div>
          <div className="contact content-body">
            <form method="POST" action="https://formspree.io/c.darioalmonte@gmail.com" style={{zIndex: 10}}>
              <input type="hidden" name="_subject" defaultValue="Contact request from personal website" />
              <input type="email" name="_replyto" placeholder="Your email" required />
              <textarea name="message" placeholder="Your message" required defaultValue={""} />
              <button type="submit">Send</button>
              <h4>© Carlos Almonte 2017</h4>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = { 
  main: {
    display: 'flex',
    marginTop: 150,
    height: window.innerHeight * 0.8,
    justifyContent: 'center'
  }
}

export default Skills;
