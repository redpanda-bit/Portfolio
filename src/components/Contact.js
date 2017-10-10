import React from 'react';

const Skills = (props) => {

  return (
    <section id="contact" className="cd-section">
      <div className="row dark-gray">
        <div className="side-content" />
        <div className="main-content">
          <div className="content-header">
            <h2 className="white-text">Contact Me</h2>
          </div>
          <div className="contact content-body">
            <form method="POST" action="https://formspree.io/c.darioalmonte@gmail.com">
              <input type="hidden" name="_subject" defaultValue="Contact request from personal website" />
              <input type="email" name="_replyto" placeholder="Your email" required />
              <textarea name="message" placeholder="Your message" required defaultValue={""} />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
        <div className="side-content" />
      </div>
    </section>
  )
}

export default Skills;
