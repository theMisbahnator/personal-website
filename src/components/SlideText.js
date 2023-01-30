import React from 'react'
import { motion} from "framer-motion";

const SlideText = ({text, side, present, delay}) => {

    const dropLeft = {
        hidden: {
          x: "-100vw",
          opacity: 0
        }, 
        visible: {
          x: "0",
          opacity: 1, 
          transition: {
            duration: 0.1, 
            delay: delay, 
            type: "spring", 
            damping: 25
          }
        }, 
        exit: {
          opacity: 0,
        }
      }
    
      const dropRight = {
        hidden: {
          x: "100vw",
          opacity: 0
        }, 
        visible: {
          x: "0",
          opacity: 1, 
          transition: {
            delay: 2, 
            duration: 0.1, 
            type: "spring", 
            damping: 25
          }
        },
        exit: {
            x: "100vw",
            opacity: 0
          }
      }


  return (
    <motion.p id="name-intro"
            variants={side === 'left' ? dropLeft : dropRight}
            initial='hidden'
            animate={present ? "visible" : "exit"}
    >
            {text}
    </motion.p>
  )
}

export default SlideText