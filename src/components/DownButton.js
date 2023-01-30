import React from 'react'
import down from '../images/bottom-arrow.png'
import { motion } from "framer-motion"

const DownButton = ({page}) => {
  return (
    <motion.a href={page} className='bot-btn'
    style={{width:"30px", height:"30px"}}
    whileHover={{ scale: 1.1 }}
    // whileTap={{ scale: 0.9 }}
    >
        <img src={down} alt="bottom" style={{width:"30px", height:"30px"}}></img>
    </motion.a>
  )
}

export default DownButton