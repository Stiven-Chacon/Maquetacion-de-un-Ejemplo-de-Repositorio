import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Proyects';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
