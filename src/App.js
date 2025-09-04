import './css/App.css';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { Routes, Route, Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <nav className='fixed-bottom bg-white'>
            <div>
                <span>
                    <Link to='/' >
                        <i className="fa-solid fa-house"></i>
                    </Link>
                </span>
                
                <span>
                    <Link to='/about' >
                        <i className='fa-solid fa-user'></i>
                    </Link>
                </span>

                <span>
                    <Link to='/projects' >
                        <i className='fa-solid fa-code'></i>
                    </Link>
                </span>

                <span>
                    <Link to='/contact'>
                        <i className='fa-solid fa-address-card'></i>
                    </Link>
                </span>
            </div>
        </nav>
        <Routes>
            <Route basename='portfolio' path='/' element={ <Home /> } />
            <Route basename='portfolio' path='/about' element={ <About /> } />
            <Route basename='portfolio' path='/projects' element={ <Projects /> } />
            <Route basename='portfolio' path='/contact' element={ <Contact /> } />
        </Routes>
    </div>
  );
}

export default App;
