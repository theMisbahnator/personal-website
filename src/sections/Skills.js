import React from 'react'
import SkillsList from '../components/SkillsList'
import down from '../images/bottom-arrow.png'
import { useInView } from 'react-intersection-observer';
import { motion} from "framer-motion";

const languages = ["java", "python", "c, c++", "golang", "javascript", "swift", "kotlin",  "sql", "html, css"];
const frameworks = ["flask", "gin", "react", "node", "express", "beego", "opencv", "pandas, matplotlib, numpy", "scikit-learn", "javafx"];
const tools = ["git", "aws s3, rds", "postgresql", "mysql", "firebase", "google cloud platform", "jupiter notebook", "postman", "swagger", "heroku", "netlify"];

const Skills = () => {
    const {ref: myRef, inView: isVisible} = useInView();

    const sect = {
        hidden: { scale: 0 },
        show: {
            scale: 1,
            transition: {
                delay : .75, 
                type: "spring",
            }
        },
    }

  return (
    <section id="skills-page" className="languages">
        <motion.p className="title languages-title"
            variants={sect} 
            initial='hidden'
            animate={isVisible ? "show" : "hidden"}
        >what have I used?</motion.p>
        <div ref = {myRef} style={{position:"absolute", top:"50%", left:"50%"}}></div>
        <SkillsList className="center" languages={languages} frameworks={frameworks} tools={tools} isVisible={isVisible}/>
        <a href='#projects-page' className='bot-btn' style={{width:"30px", height:"30px"}}>
            <img src={down} alt="bottom" style={{width:"30px", height:"30px"}}></img>
        </a>
    </section>
  )
}

export default Skills