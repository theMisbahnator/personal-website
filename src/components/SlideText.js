import React from 'react'
import { motion} from "framer-motion";

const SlideText = ({text, present}) => {

    const side = {
        hidden: {
          x: "-100vw",
          opacity: 0
        }, 
        visible: {
          x: "0",
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
    <motion.p id="name-intro"
            variants={side}
            initial='hidden'
            animate={present ? "visible" : "exit"}
    >
            {text}
    </motion.p>
  )
}

export default SlideText