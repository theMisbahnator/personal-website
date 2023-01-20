import React from 'react'
import ProjectCard from '../components/ProjectCard'
const john_cena = {
    title: "john cena!", 
    desc: "facial recognition script that plays a song when a person enters a room. created a website to change songs and headshots for users.",
    skills: "python · flask · react · opencv · postgresql · aws s3/rds"
}

const reverbify = {
    title: "reverbify", 
    desc: "Automated audio processing by adding Daycore/Nightcore twist to your favorite songs on youtube. Created iOS app to stream music.",
    skills: "golang ·  gin · aws s3 · mongodb · netlify · docker "
}

const pricify = {
    title: "pricify", 
    desc: "android app that creates, aggregates, and stores users wishlist's for their desired items.",
    skills: "kotlin · mvvm design · firebase"
}

const life_on_mars = {
    title: "life on mars", 
    desc: "discord bot that provide daily insight on the life on Mars. scraped articles and extracts images from live photos on mars from active rovers.",
    skills: "python · selenium · heroku"
}

const stroke_prediction = {
    title: "john cena!", 
    desc: "facial recognition script that plays a song when a person enters a room. created a website to change songs and headshots for users.",
    skills: "python · pandas · numpy · matplotlib · scikit-learn"
}

const n_n = {
    title: "neural nets", 
    desc: "Neural Nets, TBD",
    skills: "python · tenserflow · jupiter notebook"
}

const projects = [john_cena, reverbify, life_on_mars, pricify, stroke_prediction, n_n]

const Projects = () => {
  return (
    <section className='projects'>
        <div className="title">
            <p className='highlight'>what have i made?</p>
            {/* hello */}
        </div>
        <div className='proj-container'>
            {projects.map(items => <ProjectCard project={items}/>)}
        </div>
        
    </section>
    
  )
}



export default Projects