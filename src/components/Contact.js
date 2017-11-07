import React from 'react';

const Skills = (props) => {

  return (
    <section id="contact">
      <div className="content-header">
        <h2>Contact Me</h2>
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
    </section>
  )
}

const styles = { 
  main: {
    display: 'flex',
    marginTop: 150,
    height: window.innerHeight * 0.8,
    justifyContent: 'center'
  },
  flex: {
    flex: 1
  }
}

export default Skills;
