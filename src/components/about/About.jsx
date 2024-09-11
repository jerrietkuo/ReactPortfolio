import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Who Am I</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Retail Experience</h5>
              <small>More than ten years</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Industries</h5>
              <small>Tech, Automotive, Sales, and Import</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>See my works in the Projects Section</small>
            </article>
          </div>
          <p>
          Full stack developer leveraging background in finance and taxation to provide unique perspectives on how the end-users could interact with the websites and software platforms. Earned a certificate in Full Stack Web Development from The University of Toronto Coding Boot Camp. I also have a Bachelor of Art (majoring in Economic) from York University, Canada.
          </p>
          <p>Web Development and Information Systems always inspired me and I am very passionate about developing applications with a focus on mobile-first design and development. My strengths lie in creativity, teamwork, and building projects from ideation to execution.</p>

          <a href="#contact" className='btn btn-primary'>Contact</a>
        </div>
      </div>
    </section>
  )
}

export default About