// Import Swiper React components
import ProjectCard from '../components/ProjectCard'
import { Swiper, SwiperSlide } from "swiper/react";
import leftArrow from '../images/la.png'
import rightArrow from '../images/ra.png'
import down from '../images/bottom-arrow.png'

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
    link: "https://github.com/theMisbahnator/facial_recognition"
}

const reverbify = {
    title: "reverbify",
    desc: "automated audio processing by adding daycore/nightcore twist to musical renditions. created ios app to assemble playlists and stream music.",
    skills: "swift · golang · gin · aws s3 · mongodb · netlify · docker ",
    link: "https://github.com/theMisbahnator/Reverbify"
}

const pricify = {
    title: "pricify",
    desc: "android app that creates, aggregates, and stores users wishlist's for their desired items.",
    skills: "kotlin · firebase", 
    link: "https://medium.com/@misb2001/pricfiy-a62913aba98d"
}

const life_on_mars = {
    title: "life on mars",
    desc: "discord bot that provide daily insight on the life on Mars. scraped articles and extracts images from live photos on mars from active rovers.",
    skills: "python · selenium · heroku", 
    link: "https://github.com/theMisbahnator/Life-on-Mars"
}

const stroke_prediction = {
    title: "stroke prediction",
    desc: "predicts whether a patient will have a stroke given a set of features. cleaned data and built models with knn, neural nets, decision trees, bayes, and svm’s. ",
    skills: "python · pandas · numpy · matplotlib · scikit-learn", 
    link: "https://github.com/theMisbahnator/cs363m-final"
}

const n_n = {
    title: "neural nets",
    desc: "Neural Nets, TBD",
    skills: "python · tenserflow · jupiter notebook",
    link: "https://www.google.com/"
}

const projects = [john_cena, reverbify, life_on_mars, pricify, stroke_prediction, n_n]

const Projects = () => {

    return (
        <section id="projects-page" className='projects'>
            <div className="title">
                <p className='highlight' style={{fontSize:"30px"}}>what have i made?</p>
                <p className='instruction' style={{fontSize:"18px"}}>click it to stick it</p>
            </div>
            <div className='griddy'>
                    <div className="" style={{width:"32px", margin:"auto"}}>
                        <img className='swiper-button image-swiper-button-prev' src={leftArrow} alt='leftArrow' />
                    </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    direction={"horizontal"}
                    slidesPerGroup={1}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    showsPagination={false}
                    // navigation={true}
                    navigation={{
                        nextEl: ".image-swiper-button-next",
                        prevEl: ".image-swiper-button-prev",
                        disabledClass: "swiper-button-disabled"
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper slider-container"
                >
                    {projects.map(items => <SwiperSlide><ProjectCard project={items} /></SwiperSlide>)}
                </Swiper>
                <div className="" style={{width:"32px", margin:"auto"}}>
                    <img className='swiper-button image-swiper-button-next' src={rightArrow} alt='rightArrow' />
                </div>
            </div>
            <a href='#about-page' className='bot-btn' style={{width:"30px", height:"30px"}}>
                <img src={down} alt="bottom" style={{width:"30px", height:"30px"}}></img>
            </a>
        </section>
    );
};

export default Projects;