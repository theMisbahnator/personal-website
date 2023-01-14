import React from 'react'
import WorkCard from '../components/WorkCard'
import Atlassian from '../images/atlassian.png'
import Ibm from '../images/ibm.png'
import Paycom from '../images/paycom.png'
import Nordstrom from '../images/nordstrom.png'


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
    work: "working on a data analytics project that deals with displaying sales information to employees.",
    skills: "tbd",
    image: Nordstrom 
}
const atlassian = {
    name: "atlassian",
    title: "software intern", 
    term: "summer 2023", 
    work: "tbd",
    skills: "tbd",
    image: Atlassian
}

let index = 0; 

const workplaces = [paycom, ibm, nordstrom, atlassian]

const Work = () => {
  return (
    <section className="work">
      <div>
        <div className="title">
          <p>where have i worked?</p>
        </div>
        {workplaces.map(company => <WorkCard className="top-level" key={index++} name={company.name} title={company.title} term={company.term} 
                    work={company.work} skills={company.skills} image={company.image} show={false} />)}
      </div>
    </section>
  )
}

export default Work