
import './App.css';
import './Mediaqueries.css';
import About from './components/about-me/About';
import Experience from './components/experience/Experience';
import Footer from './components/footer.js/Footer';
import Main from './components/main-section/Main';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import {About,Experience,Footer,Main,Navbar,Projects} from './main'?
function App() {
  return (
    <>
    <Router>
    <Routes>
    <Route  path='navbar' element={<Navbar/>}/>
      <Route  path='/' element={<Main/>}/>
      <Route  path='about' element={<About/>}/>
      <Route  path='experience' element={<Experience/>}/>
      <Route  path='projects' element={<Projects/>}/>
      <Route  path='footer' element={<Footer/>}/>
      
    </Routes>
    </Router>
    </>
  );
}

export default App;
