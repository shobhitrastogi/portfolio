
import './App.css';
import './Mediaqueries.css';
import About from './components/about-me/About';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Main from './components/main-section/Main';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route  path='navbar' element={<Header/>}/>
      <Route  path='/' element={<Main/>}/>
      <Route  path='about' element={<About/>}/>
      <Route  path='experience' element={<Experience/>}/>
      <Route  path='projects' element={<Projects/>}/>
      <Route  path='/contact' element={<Contact/>}/>
      
    </Routes>
    </Router>
    </>
  );
}

export default App;
