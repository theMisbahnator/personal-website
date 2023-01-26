import React from 'react'
import SkillsList from '../components/SkillsList'


const languages = ["java", "python", "c, c++", "golang", "javascript", "kotlin", "swift", "sql", "html, css"];
const frameworks = ["flask", "gin", "react", "node", "express", "beego", "opencv", "pandas, matplotlib, numpy", "scikit-learn", "javafx"];
const tools = ["git", "aws s3, rds, lambda", "postgresql", "mysql", "mongodb", "jupiter notebook", "postman", "swagger", "heroku", "netlify"];

const Skills = () => {
  return (
    <section id="skills-page" className="languages">
        {/* <p className="title" style={{fontSize:"33px"}}>what do i know?</p> */}
        <SkillsList className="center" languages={languages} frameworks={frameworks} tools={tools}/>
    </section>
  )
}

export default Skills