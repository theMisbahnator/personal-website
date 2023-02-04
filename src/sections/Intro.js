import React from 'react'
import { useInView } from 'react-intersection-observer';
import DownButton from '../components/DownButton'
import { motion } from "framer-motion";

const Intro = () => {
  const { ref: myRef, inView: isVisible } = useInView();

  const container = {
    hidden: {},
    show: {
      transition: {
        delay: 1.5,
        staggerChildren: 0.25,
        delayChildren: 0.3,
      },
    },
  }

  const side = {
    hidden: {
      x: "-100vw",
      opacity: 0,
      scale: 0, 
    }, 
    show: {
      x: "0",
      opacity: 1,
      scale: 1, 
      transition: {
        type: "spring", 
        damping: 25
      }
    }, 
  }

  return (
    <section id="intro-page" className="intro">
      <div ref={myRef} style={{ position: "absolute", top: "50%", left: "50%" }}></div>
      <div>
        <motion.div className="title"
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
        >
        <motion.p variants={side}>
          my name is misbah imtiaz.
        </motion.p>
        <motion.p variants={side}>
          i am a junior computer science student at the university of texas at austin!
        </motion.p>
        <motion.p variants={side}>
          i like to play basketball, soccer, catan, and watch horror movies.
        </motion.p>

          {/* <SlideText text={"my name is misbah imtiaz."} side='left' present={isVisible} delay={0.25} />
          <SlideText text={"i am a junior computer science student at the university of texas at austin!"} side='left' present={isVisible} delay={0.5} />
          <SlideText text={"i like to play basketball, soccer, catan, and watch horror movies."} side='left' present={isVisible} delay={.75} /> */}
        </motion.div>
        <DownButton page='#work-page' />
      </div>
    </section>
  )
}

export default Intro