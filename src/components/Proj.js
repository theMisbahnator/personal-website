import React from 'react'
import { useInView } from 'react-intersection-observer';
import { motion} from "framer-motion";


const Proj = ({project}) => {
  const {ref: myRef, inView: isVisible} = useInView();

  const expand = {
    hidden: {
      opacity: 0,
      width: 0,
    }, 
    visible: {
      width:"85%",
      opacity: 1, 
      transition: {
        type: "spring", 
        damping: 25
      }
    }, 
    exit: {
      opacity: 0,
    }
  }

  return (
    <motion.div ref={myRef} className='proj-card'
      variants={expand}
      initial='hidden'
      animate={isVisible ? "visible" : "hidden"}
    >
        <div className='proj-img'>
            <img src={project.img} alt="mars" style={{width:"100%", height: "270px", borderRadius:"3.5%"}}></img>
        </div>
        <div style={{textAlign:"center"}}>
            <div className='p-title-size'>{project.title}</div>
            <div className='p-desc-size'>{project.desc}</div>
            <div className='p-skills-size'>{project.skills}</div>
        </div>
    </motion.div>
  )
}

export default Proj