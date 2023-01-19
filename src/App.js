import './App.css';
import Greeting from './sections/Greeting';
import Intro from './sections/Intro';
import Skills from './sections/Skills';
// import Work from './sections/Work';
import AboutMe from './sections/AboutMe';
import Projects from './sections/Projects';

function App() {
  return (
    <div className="App">
      <Greeting/>
      <Intro/>
      {/* <Work/> */}
      <Skills/>
      <Projects/>
      <AboutMe/>
    </div>
  );
}


export default App;
