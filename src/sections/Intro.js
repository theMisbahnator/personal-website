import React from 'react'
import { useInView } from 'react-intersection-observer';
import '../background.css'
import DownButton from '../components/DownButton'
import SlideText from '../components/SlideText';

const Intro = () => {
  const {ref: myRef, inView: isVisible} = useInView();

  return (
    <section id="intro-page" className="intro">
      <div ref = {myRef} style={{position:"absolute", top:"50%", left:"50%"}}></div>
      <div>
        <div className="title">
          <SlideText text={"my name is misbah imtiaz."} side='left' present={isVisible} delay={0.25}/>
          <SlideText text={"i am a junior computer science student at the university of texas at austin!"} side='left' present={isVisible} delay={0.5}/>
          <SlideText text={"i like to play basketball, soccer, catan, and watch horror movies."} side='left'  present={isVisible} delay={.75}/>
        </div>
        <DownButton page='#work-page'/>
      </div>
    </section>
  )
}

export default Intro