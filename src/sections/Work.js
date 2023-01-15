import React, { useState } from 'react'
import WorkCard from '../components/WorkCard'
import Atlassian from '../images/atlassian.png'
import Ibm from '../images/ibm.png'
import Paycom from '../images/paycom.png'
import Nordstrom from '../images/nord.png'
import Gray_Nord from '../images/nordstrom.png'
import { is } from '@babel/types'


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

let index = 0;

const workplaces = [paycom, ibm, nordstrom, atlassian]

const Work = () => {
    const [isJob, setJob] = useState(paycom);
    const [paycomGray, setPaycomGray] = useState("grayscale(0)");
    const [ibmGray, setibmGray] = useState("grayscale(100%)");
    const [atlGray, setatlGray] = useState("grayscale(100%)");

    const handleClick = (company) => {
        if (company == paycom) {
            setJob(paycom);
            setPaycomGray("grayscale(0)");
            setatlGray("grayscale(100%)");
            setibmGray("grayscale(100%)");
            nordstrom.image = Gray_Nord;
        } else if (company == ibm) {
            setJob(ibm);
            setibmGray("grayscale(0)");
            setatlGray("grayscale(100%)");
            setPaycomGray("grayscale(100%)");
            nordstrom.image = Gray_Nord;
        } else if (company == atlassian) {
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
            <div style={{ display: "grid" }}>
                <div className="title">
                    <p>where have i worked?</p>
                </div>

                <div style={{ display: "grid", justifyContent: "center", alignItems: "center", gridTemplateColumns: "50% 50%", columnGap: "10%" }}>
                    <div className='center'>
                        <div>
                            <span><img src={paycom.image} alt={"paycom"} style={{ filter: paycomGray }} onClick={() => { handleClick(paycom) }} /> </span>
                        </div>
                        <div>
                            <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
                                <span><img className="logo" src={ibm.image} alt={"ibm"} style={{ margin: "40px", filter: ibmGray }} onClick={() => { handleClick(ibm) }} /> </span>
                                <span style={{ marginBottom: "10px" }}>click me!</span>
                                <span><img className="logo" src={atlassian.image} alt={"atlassian"} style={{ margin: "40px", filter: atlGray }} onClick={() => { handleClick(atlassian) }} /> </span>
                            </div>
                        </div>
                        <div>
                            <span><img className="logo" src={nordstrom.image} alt={"nordstrom"} onClick={() => { handleClick(nordstrom) }} /></span>
                        </div>
                    </div>
                    <div className='card-container'>
                        <WorkCard key={0} name={isJob.name} title={isJob.title} term={isJob.term}
                            work={isJob.work} skills={isJob.skills} image={isJob.image} show={true}></WorkCard>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work