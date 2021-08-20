import { CssBaseline } from '@material-ui/core'
import NavBar from './components/NavBar';
import Bio from './components/Bio'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
// import './App.css';


function App() {
  
  return (
    <>
    <CssBaseline/>
    <NavBar/>
    <Bio />
    <Skills/>
    <Projects/>
    <Footer/>
    </>
  );
}

export default App;
