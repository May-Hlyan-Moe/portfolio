import './css/App.scss';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Certification from './Certification';
import Contact from './Contact';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <nav className='fixed-bottom bg-white'>
            <div>
                <span>
                    <Link to='/' title="Home">
                        <i className="fa-solid fa-house"></i>
                    </Link>
                </span>
                
                <span>
                    <Link to='/about' title="About">
                        <i className='fa-solid fa-user'></i>
                    </Link>
                </span>

                <span>
                    <Link to='/projects' title="Projects">
                        <i className='fa-solid fa-code'></i>
                    </Link>
                </span>

                <span>
                    <Link to='/certification' title="Certifications">
                        <i class="bi bi-award-fill"></i>
                    </Link>
                </span>

                <span>
                    <Link to='/contact' title="Contact">
                        <i className='fa-solid fa-address-card'></i>
                    </Link>
                </span>
            </div>
        </nav>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/certification' element={<Certification />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
