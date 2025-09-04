import './css/App.css';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { Routes, Route } from 'react-router-dom';
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
            <Route path='/' element={ <Home /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/projects' element={ <Projects /> } />
            <Route path='/contact' element={ <Contact /> } />
        </Routes>
    </div>
  );
}

export default App;
