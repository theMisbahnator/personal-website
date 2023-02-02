// Import Swiper React components
// import ProjectCard from '../components/ProjectCard'
import Proj from '../components/Proj';
import { Swiper, SwiperSlide } from "swiper/react";
import leftArrow from '../images/la.png'
import rightArrow from '../images/ra.png'
import down from '../images/bottom-arrow.png'
import mars from '../images/mars.jpg'
import john from '../images/john.png'
import price from '../images/price.png'
import reverb from '../images/reverb.jpeg'
import nn from '../images/nn.png'
import stroke from '../images/strk.jpeg'

import { useState, useEffect } from 'react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation} from "swiper";

const john_cena = {
    title: "john cena!",
    desc: "facial recognition script that plays a song when a person enters a room. created a website to change songs and headshots for users.",
    skills: "python · flask · react · opencv · postgresql · aws s3/rds",
    img: john, 
    link: "https://github.com/theMisbahnator/facial_recognition"
}

const reverbify = {
    title: "reverbify",
    desc: "automated audio processing by adding daycore/nightcore twist to musical renditions. created ios app to assemble playlists and stream music.",
    skills: "swift · golang · gin · aws s3 · mongodb · netlify · docker ",
    img: reverb,
    link: "https://github.com/theMisbahnator/Reverbify"
}

const pricify = {
    title: "pricify",
    desc: "android app that creates, aggregates, and stores users wishlist's for their desired items.",
    skills: "kotlin · firebase", 
    img: price, 
    link: "https://medium.com/@misb2001/pricfiy-a62913aba98d"
}

const life_on_mars = {
    title: "life on mars",
    desc: "discord bot that provide daily insight on the life on Mars. scraped articles and extracts images from live photos on mars from active rovers.",
    skills: "python · selenium · heroku", 
    img: mars, 
    link: "https://github.com/theMisbahnator/Life-on-Mars"
}

const stroke_prediction = {
    title: "stroke prediction",
    desc: "predicts whether a patient will have a stroke given a set of features. cleaned data and built models with knn, neural nets, decision trees, bayes, and svm’s. ",
    skills: "python · pandas · numpy · matplotlib · scikit-learn", 
    img: stroke,
    link: "https://github.com/theMisbahnator/cs363m-final"
}

const n_n = {
    title: "neural nets",
    desc: "Neural Nets, TBD",
    skills: "python · tenserflow · jupiter notebook",
    img: nn,
    link: "https://www.google.com/"
}

const projects = [john_cena, reverbify, life_on_mars, pricify, stroke_prediction, n_n]

const Projects = () => {
    
    const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
        <section id="projects-page" className='projects'>
            <div className="title">
                <p className='highlight' style={{fontSize:"30px"}}>what have i made?</p>
            </div>
            <div className='griddy'>
                    <div className="" style={{width:"32px", margin:"auto"}}>
                        <img className='swiper-button image-swiper-button-prev' src={leftArrow} alt='leftArrow' />
                    </div>
                <Swiper
                    slidesPerView={width > 900 ? 3 : 1}
                    spaceBetween={10}
                    direction={"horizontal"}
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={{
                        nextEl: ".image-swiper-button-next",
                        prevEl: ".image-swiper-button-prev",
                        disabledClass: "swiper-button-disabled"
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper slider-container"
                >
                    {projects.map(items => <SwiperSlide><Proj project={items} /></SwiperSlide>)}
                </Swiper>
                <div className="" style={{width:"32px", margin:"auto"}}>
                    <img className='swiper-button image-swiper-button-next' src={rightArrow} alt='rightArrow' />
                </div>
            </div>

            <a href='#about-page' style={{display:"flex", justifyContent:"center", alignContent:"center", height:width > 450 ? "30px" : "25px"}}>
                <img src={down} alt="bottom" style={{width:width > 450 ? "30px" : "25px", height:width > 450 ? "30px" : "25px"}}></img>
            </a>
        </section>
    );
};

export default Projects;