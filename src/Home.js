import './css/home.css';

function Home () {
    return (
        <div className='Home'>
            
            <div className='first-div'>
                <div className='icons container'>
                    <ul>
                        <li>
                            <a href='https://github.com/May-Hlyan-Moe'>
                                <i className='fa-brands fa-github'></i>
                            </a>
                        </li>

                        <li>
                            <a href='https://www.linkedin.com/in/may-hlyan-moe-658240377/'>
                                <i className='fa-brands fa-linkedin'></i>
                            </a>
                        </li>

                        <li>
                            <a href='https://www.instagram.com/may_hlyan_moe?igsh=Ymc5Y28xNXVlc2Fx'>
                                <i className='fa-brands fa-instagram'></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='greeting container'>
                    <h4>Hello World!</h4>
                    <hr />
                </div>
            </div>

            <div className='main-div-large container'>
                <div className='row'>
                    <div className='col-6 name-div'>
                        <div>
                            <h1>May Hlyan Moe</h1>
                            <h4>Junior Web Developer</h4>
                            <h4>Computer Science Student</h4>
                            <h4>& I love what I am doing</h4>
                        </div>
                    </div>

                    <div className='col-6 img-div'>
                        <img src='https://i.ibb.co/rG4Yq2R0/my-Profile.jpg' alt='my profile'/>
                    </div>
                </div>
            </div>

            <div className='main-div-small'>
                <div>
                    <div className='img-div'>
                        <img src='https://i.ibb.co/rG4Yq2R0/my-Profile.jpg' alt='my profile'/>
                    </div>

                    <div className='name-div'>
                        <h1>May Hlyan Moe</h1>
                        <h4>Junior Web Developer</h4>
                        <h4>Computer Science Student</h4>
                        <h4>& I love what I am doing</h4>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;