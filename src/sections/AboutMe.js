import React from 'react'
import misbah from '../images/misbah.jpg'
// import resume from '../images/Misbah_CS_Resume_2023.pdf'
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const AboutMe = () => {
    const { ref: myRef, inView: isVisible } = useInView();

    const container = {
        hidden: {},
        show: {
            transition: {
                delay: 1.5,
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    }

    const above = {
        hidden: { scale: 0, y: "5vh" },
        show: {
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
            }
        },
    }

    return (
        <section id="about-page" className="about-me">
            <div ref = {myRef} style={{position:"absolute", top:"70%", left:"50%"}}></div>
                <motion.div className="title" style={{ fontSize: "30px" }}
                    variants={container}
                    initial="hidden"
                    animate={isVisible ? "show" : "hidden"}
                >
                    <motion.div  variants={above}>
                        <img className="misbah" alt="misbah" src={misbah}></img>
                    </motion.div>
                    <motion.p variants={above}>
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
                    </motion.p>
                    <motion.p variants={above}>class of '24</motion.p>
                    <motion.p variants={above}>
                        <span className='under-hover'>
                            <a href="https://github.com/theMisbahnator" className="about-links">github</a>
                        </span>
                        <span> | </span>
                        <span className='under-hover'>
                            <a href="https://drive.google.com/drive/folders/1PAMCuXyCBGSFhnNLnv0SBOCpgDuZoY3A?usp=sharing" className="about-links" target="_blank" rel="noreferrer">resume</a>
                        </span>
                        <span> | </span>
                        <span className='under-hover'>
                            <a href="https://www.linkedin.com/in/misbah-imtiaz/" className="about-links">linkedin</a>
                        </span>
                    </motion.p>
                    <motion.p variants={above}>
                        <span className='under-hover'>
                            <a href="mailto:misb2001@gmail.com?subject=From%20Website:" className="about-links">contact me</a>
                        </span>
                    </motion.p>
                </motion.div>
        </section>
    )
}

export default AboutMe