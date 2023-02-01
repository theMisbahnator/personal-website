import React from 'react'

const Proj = ({project}) => {
  return (
    <div className='proj-card'>
        <div className='proj-img'>
            <img src={project.img} alt="mars" style={{width:"100%", height: "270px", borderRadius:"5%"}}></img>
        </div>
        <div style={{textAlign:"center"}}>
            <div className='p-title-size'>{project.title}</div>
            <div className='p-desc-size'>{project.desc}</div>
            <div className='p-skills-size'>{project.skills}</div>
        </div>
    </div>
  )
}

export default Proj