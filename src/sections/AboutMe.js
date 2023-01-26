import React from 'react'
import misbah from '../images/misbah.jpg'

const AboutMe = () => {
  return (
    <section className="about-me">
        <div class="title" style={{fontSize:"30px"}}>
        <img className="misbah" alt="misbah" src={misbah}></img>
          <p>
            <span className='under-hover'>work</span>
            <span> | </span> 
            <span className='under-hover'>skills</span>
            <span> | </span> 
            <span className='under-hover'>projects</span>
          </p>
          <p>class of 24'</p>
          <p>
            <span className='under-hover'>github</span>
            <span> | </span> 
            <span className='under-hover'>resume</span>
            <span> | </span> 
            <span className='under-hover'>linkedin</span>
          </p>
          <p>
            <span className='under-hover'>contact me</span>
          </p>
        </div>
    </section>
  )
}

export default AboutMe