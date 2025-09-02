import './css/contact.css';

function Contact () {
    return (
        <div className="Contact
                        d-flex
                        justify-content-center
                        align-items-center
                        vh-100" id="contact-div">
            <div>
                <h1 className='text-center fw-bold'>
                    Get in Touch!
                </h1>
            
            <div className='d-flex'>

            
                <ul>
                    <li className='m-5'>
                        <i class="fa-solid fa-envelope"></i>
                        <a href='mailto:mayhlyanmoe@gmail.com'>mayhlyanmoe@gmail.com</a>
                    </li>

                    <li className='m-5'>
                        <i className='fa-brands fa-github'></i>
                        <a href='https://github.com/May-Hlyan-Moe'>May-Hlyan-Moe</a>
                    </li>

                    <li className='m-5'>
                        <i className='fa-brands fa-linkedin'></i>
                        <a href='https://www.linkedin.com/in/may-hlyan-moe-658240377/'>May Hlyan Moe</a>
                    </li>

                    <li className='m-5'>
                        <i className='fa-brands fa-instagram'></i>
                        <a href='https://www.instagram.com/may_hlyan_moe?igsh=Ymc5Y28xNXVlc2Fx'>@may_hlyan_moe</a>
                    </li>

                    <li className='m-5'>
                        <i class="fa-solid fa-location-dot"></i>
                        <span>Yangon, Myanmar</span>
                    </li>
                </ul>

            </div>
            </div>
        </div>
    )
}

export default Contact;