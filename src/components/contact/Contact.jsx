import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
// import emailjs from 'emailjs-com'

import { useState } from "react";
import validator from 'validator'

const Contact = () => {

  const form = useRef();

  const [emailError, setEmailError] = useState('')

// EMAIL VALIDATING
  const handleChange = (e) => {
    if (validator.isEmail(e.target.value)) {
      console.log("good email")
      setEmailError("")
    } else {
      console.log("bad email")
      setEmailError("Please enter a valid Email")
    }

    console.log("clicked")
    console.log(e.target.value)

  };
// SEND MESSAGE BY SENDER TO INBOX
const sendEmail = (e) => {
e.preventDefault();



 e.target.reset()
};

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>jerrietkuo@gmail.com</h5>
            <a href="mailto:jerrietkuo@gmail.com" target="_blank" rel="noopener noreferrer" >Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Jerriet Kuo</h5>
            <a href="https://m.me/jerrietkuo/" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+16472804915</h5>
            <a href="https://wa.me/16472804915" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' onChange={handleChange} required />
          <p>{emailError}</p>
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact