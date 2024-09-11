import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

// SOCIAL ICONS AND LINKS

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/jerrietkuo/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/jerrietkuo" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer"><FiDribbble /></a>
      <a href="https://x.com/JerrietKuo" target="_blank" rel="noopener noreferrer"><IoLogoTwitter/></a>
    </div>
  )
}

export default HeaderSocials