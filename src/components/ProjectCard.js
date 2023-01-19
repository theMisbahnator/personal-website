import React from 'react'

const ProjectCard = ({project}) => {
  return (
    <div className='project-card'>
        <div className='content'>
            <p className='project-title'>{project.title}</p>
            <p className='project-desc'>{project.desc}</p>
            <p className='project-skills'>{project.skills}</p>
        </div>
        
    </div>
  )
}

export default ProjectCard