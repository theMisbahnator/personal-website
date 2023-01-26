import React from 'react'
import misbah from '../images/misbah.jpg'
import resume from '../images/Misbah_CS_Resume_2023.pdf'

const AboutMe = () => {

  return (
    <section id="about-page" className="about-me">
        <div className="title" style={{fontSize:"30px"}}>
        <img className="misbah" alt="misbah" src={misbah}></img>
          <p>
            <span className='under-hover'>
                <a href="#work-page" className="about-links">work</a>
            </span>
            <span> | </span> 
            <span className='under-hover'>
                <a href="#skills-page" className="about-links">skills</a>
            </span>
            <span> | </span> 
            <span className='under-hover'>
                <a href="#projects-page" className="about-links">projects</a>
            </span>
          </p>
          <p>class of 24'</p>
          <p>
            <span className='under-hover'>
                <a href="https://github.com/theMisbahnator" className="about-links">github</a>
            </span>
            <span> | </span> 
            <span className='under-hover'>
                <a href={resume} className="about-links" target="_blank" rel="noreferrer">resume</a>
            </span>
            <span> | </span> 
            <span className='under-hover'>
                <a href="https://www.linkedin.com/in/misbah-imtiaz/" className="about-links">linkedin</a>
            </span>
          </p>
          <p>
            <span className='under-hover'>
                <a href="mailto:misb2001@gmail.com?subject=From%20Website:" className="about-links">contact me</a>
            </span>
          </p>
        </div>
    </section>
  )
}

export default AboutMe