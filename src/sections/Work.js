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
    work: "created a real time notification service for monitoring payroll transactions and long running processes.",
    skills: "React.js · Node.js · Express.js · JavaScript · MySQL · Postman",
    image: Paycom
}

const ibm = {
    name: "ibm",
    title: "backend intern",
    term: "fall 2022",
    work: "developed on the spectrum fusion team building storage infrastructure for containerized applications on openShift.",
    skills: "Golang · Swagger · Python · TravisCI · OpenShift",
    image: Ibm
}

const nordstrom = {
    name: "nordstrom",
    title: "software intern",
    term: "spring 2023",
    work: "data services team building a pipline for sales information",
    skills: "java spring boot · aws rds/lambda · terradata · docker · kubernetes · new relic · splunk",
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
    message: "where have i worked"
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
                        >where have i worked?</motion.div>
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