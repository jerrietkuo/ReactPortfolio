import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'
import { FaGithub } from 'react-icons/fa'
import { GrDeploy } from 'react-icons/gr'

// SIX OF MY PROJECTS.....

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Weather Gadget',
    desc: 'A weather dashboard so that the user would be able to see the weather forecast for multiple cities. Technologies: HTML, CSS Bootstrap, jQuery, Moment.js and Open Weather API',
    github: 'https://github.com/jerrietkuo/weathergadget',
    demo: 'https://jerrietkuo.github.io/weathergadget/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Tic-Tac-Toe',
    desc: 'A skill test for the good old time, can you beat it?  Technologies: HTML, CSS, and JavaScript',
    github: 'https://github.com/jerrietkuo/Tic-tac-toe',
    demo: 'https://jerrietkuo.github.io/Tic-tac-toe/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Group Project 1 - Lyric Swap',
    desc: 'A Lyric Search for music lyrics and translate them into different language. Technologies: HTML, CSS, JQuery, and the Fetch API',
    github: 'https://chardige.github.io/Travel-planner/',
    demo: 'https://github.com/CharDige/Travel-planner.git'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Tech Blog',
    desc: 'A Blog that allows users to post ideas with registered account.  Technologies: Handlebar, HTML, Node.js and PostgreSQL',
    github: 'https://github.com/jerrietkuo/TechBlog',
    demo: 'https://github.com/jerrietkuo/TechBlog'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Note Taker',
    desc: 'A note taker application used to write and save notes allowing the users to better organize their thoughts. Technologies: Node.js and its dependencies, Insomnia and Express.js',
    github: 'https://github.com/jerrietkuo/NoteTaker',
    demo: 'https://note-taker.onrender.com'
  },
  {
    id: 6,
    image: IMG6,
    title: 'PWATxtEditor',
    desc: 'Just Another Text Editor (J.A.T.E) is a Progressive Web Application (PWA) that provides a simple and intuitive interface for writing and managing text. Technologies: HTML, CSS, JavaScript, Babel, Service Workers, Express.js, Node.js, Webpack, and IndexedDB',
    github: 'https://github.com/jerrietkuo/PWATxtEditor',
    demo: 'https://pwatxteditor.onrender.com'
  },


]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, desc, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <h4>{desc}</h4>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noopener noreferrer" ><FaGithub />Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer"><GrDeploy />Deployed Link</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}
export default Portfolio