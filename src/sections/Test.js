// Import Swiper React components
import ProjectCard from '../components/ProjectCard'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const john_cena = {
    title: "john cena!", 
    desc: "facial recognition script that plays a song when a person enters a room. created a website to change songs and headshots for users.",
    skills: "python · flask · react · opencv · postgresql · aws s3/rds"
}

const reverbify = {
    title: "reverbify", 
    desc: "automated audio processing by adding daycore/nightcore twist to musical renditions. created ios app to assemble playlists and stream music.",
    skills: "swift · golang · gin · aws s3 · mongodb · netlify · docker "
}

const pricify = {
    title: "pricify", 
    desc: "android app that creates, aggregates, and stores users wishlist's for their desired items.",
    skills: "kotlin · firebase"
}

const life_on_mars = {
    title: "life on mars", 
    desc: "discord bot that provide daily insight on the life on Mars. scraped articles and extracts images from live photos on mars from active rovers.",
    skills: "python · selenium · heroku"
}

const stroke_prediction = {
    title: "stroke prediction", 
    desc: "predicts whether a patient will have a stroke given a set of features. cleaned data and built models with knn, neural nets, decision trees, bayes, and svm’s. ",
    skills: "python · pandas · numpy · matplotlib · scikit-learn"
}

const n_n = {
    title: "neural nets", 
    desc: "Neural Nets, TBD",
    skills: "python · tenserflow · jupiter notebook"
}

const projects = [john_cena, reverbify, life_on_mars, pricify, stroke_prediction, n_n]

const Test = () => {

    return (
        <section>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                // navigation={true}
                navigation={{
                    nextEl: ".image-swiper-button-next",
                    prevEl: ".image-swiper-button-prev",
                    disabledClass: "swiper-button-disabled"
                  }}
                modules={[Pagination, Navigation]}
                className="mySwiper slider-container"
            >
                {projects.map(items => <SwiperSlide><ProjectCard project={items}/></SwiperSlide>)}
            </Swiper>
        </section>
    );
};

export default Test;