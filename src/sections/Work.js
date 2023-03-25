import React, { useState, useEffect } from 'react'
import WorkCard from '../components/WorkCard'
import Atlassian from '../images/atlassian.png'
import Ibm from '../images/ibm.png'
import Paycom from '../images/paycom.png'
import Gray_Nord from '../images/nordstrom.png'
import DownButton from '../components/DownButton'
import { motion } from "framer-motion";
import { WorkPlaces } from '../components/WorkPlaces'
import { useInView } from 'react-intersection-observer';


const paycom = {
    name: "paycom",
    title: "software intern",
    term: "summer 2022",
    work: "created a real time notification service for monitoring 10,000+ payroll transactions processes reducing data bandwidth usage by 85%.",
    skills: "react.js · node.js · express.js · javascript · mysql · postman",
    image: Paycom
}

const ibm = {
    name: "ibm",
    title: "backend intern",
    term: "fall 2022",
    work: "developed on the spectrum fusion team building storage infrastructure for containerized applications on red hat openshift.",
    skills: "golang · swagger · python · travisci · openshift",
    image: Ibm
}

const nordstrom = {
    name: "nordstrom",
    title: "software intern",
    term: "spring 2023",
    work: "modernized a data pipeline for providing sales commission information for 86,000+ store employees reducing cloud costs by $11,000 annually.",
    skills: "java · spring boot · mockito · aws rds · postgresql · swagger · postman",
    image: Gray_Nord
}
const atlassian = {
    name: "atlassian",
    title: "software intern",
    term: "summer 2023",
    work: "tbd",
    skills: "tbd",
    image: Atlassian
}
const placeHolder = {
    message: "where have I worked"
}

const Work = () => {
    const [isJob, setJob] = useState(placeHolder);
    const [reload, setReload] = useState(true);
    
    useEffect(() => {
        setTimeout(() => {
            setReload(true);
        },400);
        setReload(false);
      }, [isJob]);


    const { ref: myRef, inView: isVisible } = useInView();

    const expand = {
        hidden: {
            scale: 0,
            opacity: 0, 
        },
        visible: {
            scale: 1,
            opacity: 1, 
            transition: {
                type: "spring",
                damping: 25
            }
        },
        exit: {
            scale: 0,
            opacity: 0, 
        }
    }

    return (
        <section id="work-page" className="work">
            <div ref={myRef} style={{ position: "absolute", top: "50%", left: "50%" }}></div>
            <motion.div className="work-cont" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                variants={expand}
                initial='hidden'
                animate={isVisible && reload ? "visible" : 'exit'}
            >
                {
                    isJob === placeHolder
                        ? <motion.div className='work-card' style={{ textAlign:"center", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "35px" }}
                            initial={{ opacity: 0 }}
                            animate={(isVisible && reload) ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.5, ease: 'easeInOut', delay: .4 }}
                        >where have I worked?</motion.div>
                        : <WorkCard key={0} name={isJob.name} title={isJob.title} term={isJob.term}
                            work={isJob.work} skills={isJob.skills} image={isJob.image} show={true}></WorkCard>
                }
            </motion.div>
            <WorkPlaces paycom={paycom} ibm={ibm} nordstrom={nordstrom} atlassian={atlassian} placeHolder={placeHolder} isJob={isJob} setJob={setJob} isVisible={isVisible} />
            <DownButton page="#skills-page" />
        </section>
    )
}

export default Work