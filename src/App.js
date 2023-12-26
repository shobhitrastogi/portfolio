import './App.css';
import './Mediaqueries.css';
import About from './components/about-me/About';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Main from './components/main-section/Main';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
      <Header />
      <Main />
    <About />
    <Experience />
    <Projects />
    <Contact />
    </Router>
    </>
  );
}

export default App;
