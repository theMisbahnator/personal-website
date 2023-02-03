import {React} from 'react'
import WavyText from '../components/WavyText'
import { useInView } from 'react-intersection-observer';
import DownButton from '../components/DownButton';

const Greeting = () => {
  const {ref: myRef, inView: isVisible} = useInView();

  return (
    <section id="greeting-page" className="greeting">
      <div ref = {myRef} >
        <WavyText id="greeting-text" text="hello!" replay={isVisible} cName="greeting"/>
        <DownButton page ='#intro-page' />
      </div>
    </section>
    
  )
}

export default Greeting