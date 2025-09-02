import './css/App.css';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <nav className='fixed-bottom bg-white'>
            <div>
                <a href='/' >
                    <i className="fa-solid fa-house"></i>
                </a>
                <a href='/about' >
                    <i className='fa-solid fa-user'></i>
                </a>
                <a href='/projects' >
                    <i className='fa-solid fa-code'></i>
                </a>
                <a href='/contact'>
                    <i className='fa-solid fa-address-card'></i>
                </a>
            </div>
        </nav>
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/projects' element={ <Projects /> } />
            <Route path='/contact' element={ <Contact /> } />
        </Routes>
    </div>
  );
}

export default App;
