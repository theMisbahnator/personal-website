import './App.css';
import Greeting from './sections/Greeting';
import Intro from './sections/Intro';
import Skills from './sections/Skills';
import Work from './sections/Work';
import AboutMe from './sections/AboutMe';
import Projects from './sections/Projects';
import Test from './sections/Test';

function App() {
  return (
    <div className="App">
      <Greeting/>
      <Intro/>
      <Work/>
      <Skills/>
      <Projects/>
      <Test/>
      <AboutMe/>
    </div>
  );
}


export default App;
