import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import { FaLinkedin } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get IN Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>jyotsna@gmail.com</h5>
            <a href="mailto:jyotsna@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <FaLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>www.linkedin.com/in/jyotsna-jha</h5>
            <a href="https://www.linkedin.com/in/jyotsna-jha" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+91-7758855556</h5>
            <a href="https://api.whatsapp.com/send?phone+917758855556" target="_blank">
              Send a message
            </a>
          </article>

        </div>
        {/* END OF CONTACT OPTIONS */}

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact
