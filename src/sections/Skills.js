import React from 'react'
import SkillsList from '../components/SkillsList'
import down from '../images/bottom-arrow.png'


const languages = ["java", "python", "c, c++", "golang", "javascript", "kotlin", "swift", "sql", "html, css"];
const frameworks = ["flask", "gin", "react", "node", "express", "beego", "opencv", "pandas, matplotlib, numpy", "scikit-learn", "javafx"];
const tools = ["git", "aws s3, rds", "postgresql", "mysql", "firebase", "jupiter notebook", "postman", "swagger", "heroku", "netlify"];

const Skills = () => {
  return (
    <section id="skills-page" className="languages">
        {/* <p className="title" style={{fontSize:"33px"}}>what do i know?</p> */}
        <SkillsList className="center" languages={languages} frameworks={frameworks} tools={tools}/>
        <a href='#projects-page' className='bot-btn'>
            <img src={down} alt="bottom" style={{width:"30px", height:"30px"}}></img>
        </a>
    </section>
  )
}

export default Skills