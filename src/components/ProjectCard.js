import React, { useState } from 'react'



const ProjectCard = ({project}) => {

  const[onTitle, setTitle] = useState(true);
  const[onBoxClick, setBoxClick] = useState(false);

  return (
    <div className='project-card'
        onMouseEnter={() => setTitle(false)}
        onMouseLeave={() => setTitle(true)}
        onClick={()=>setBoxClick(!onBoxClick)}
    >
        { (!onBoxClick && onTitle) 
            ? <div className='content'>
                <p className='project-title'>{project.title}</p>
            </div>
            : <div className='content'>
                <a className='about-links' href={project.link}>
                    <p className='project-desc under-hover'>{project.desc}</p>
                </a>
                <p className='project-skills'>{project.skills}</p>
            </div>
        }
    </div>
  )
}

export default ProjectCard