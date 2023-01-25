import React, { useState } from 'react'
import WorkCard from '../components/WorkCard'
import Atlassian from '../images/atlassian.png'
import Ibm from '../images/ibm.png'
import Paycom from '../images/paycom.png'
import Nordstrom from '../images/nord.png'
import Gray_Nord from '../images/nordstrom.png'

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

// let index = 0;

// const workplaces = [paycom, ibm, nordstrom, atlassian]

const Work = () => {
    const [isJob, setJob] = useState(placeHolder);
    const [paycomGray, setPaycomGray] = useState("grayscale(0)");
    const [ibmGray, setibmGray] = useState("grayscale(100%)");
    const [atlGray, setatlGray] = useState("grayscale(100%)");

    const handleClick = (company) => {
        if (isJob === company) {
            console.log("same job ebing clicked");
            setatlGray("grayscale(100%)");
            setibmGray("grayscale(100%)");
            setPaycomGray("grayscale(100%)");
            nordstrom.image = Gray_Nord;
            setJob(placeHolder);
            return;
        }
        if (company === paycom) {
            setJob(paycom);
            setPaycomGray("grayscale(0)");
            setatlGray("grayscale(100%)");
            setibmGray("grayscale(100%)");
            nordstrom.image = Gray_Nord;
        } else if (company === ibm) {
            setJob(ibm);
            setibmGray("grayscale(0)");
            setatlGray("grayscale(100%)");
            setPaycomGray("grayscale(100%)");
            nordstrom.image = Gray_Nord;
        } else if (company === atlassian) {
            setJob(atlassian);
            setatlGray("grayscale(0)");
            setibmGray("grayscale(100%)");
            setPaycomGray("grayscale(100%)");
            nordstrom.image = Gray_Nord;
        } else {
            setJob(nordstrom);
            setatlGray("grayscale(100%)");
            setibmGray("grayscale(100%)");
            setPaycomGray("grayscale(100%)");
            nordstrom.image = Nordstrom;
        }
    }

    return (
        <section className="work">
                <div  className= "work-cont" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        {
                            isJob === placeHolder 
                                ? <div className='work-card' style={{display: "flex", justifyContent: "center", alignItems: "center", fontSize:"35px"}} >where have i worked?</div>
                                : <WorkCard key={0} name={isJob.name} title={isJob.title} term={isJob.term}
                                work={isJob.work} skills={isJob.skills} image={isJob.image} show={true}></WorkCard>
                        }
                </div>
                
                <div className='select-cont' style={{display:"grid", gridTemplateRows:"1f 1f"}}>
                    <p style={{fontSize:"18px", textAlign:"center"}}>press me!</p>
                    <div className='jobs' style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <img className="logo" src={paycom.image} alt={"paycom"} style={{ filter: paycomGray }} onClick={() => { handleClick(paycom) } } />
                        <img className="logo" src={ibm.image} alt={"ibm"} style={{ filter: ibmGray }} onClick={() => { handleClick(ibm) }} />
                        <img className="logo" src={nordstrom.image} alt={"nordstrom"} onClick={() => { handleClick(nordstrom) }} />
                        <img className="logo" src={atlassian.image} alt={"atlassian"} style={{ filter: atlGray }} onClick={() => { handleClick(atlassian) }} />
                    </div>
                </div>

                
        </section>
    )
}

export default Work