import './contact.css'
import resume from '../image/iconoir_arrow-tr.png' 
// import background from  './image/dot-about3.png'
// import bb from './image/connect.jpg'


const Contact = () => {
    return(

        <div className='contactsec'>
            <div className='contact-cont'>
                <div className='contact-text'>
                    <div className='text1'>
                        <h2>
                        <span>Open </span>
                        to interesting challenges 
                        and opportunities
                        </h2>
                    </div>


                    <div className='text2'>
                        <div className='text2-1'>
                            <div><p>Email</p></div>

                                <div className='email'>
                                    <a href='#'>
                                    Isaacmagnus@gmail.com
                                    </a>
                                </div>
                        </div>


                        <div className='text2-2'> 
                            <div><p>Social</p></div>

                            <div className='Social'>
                                <a href='#'> Github</a>
                                <a href='#'> Linkedin</a>
                                <a href='#'> twitter</a>
                                <a href='#'> Whahtsapp</a>
                            </div>  
                        </div>

                        <div className='text2-3'> 
                            <div><p>Resume</p></div>

                            <div className='Social'>
                                <p> Download Resume</p>  
                            </div>  
                            <div><a href='#'><img src={resume}></img> </a></div>
                        </div>
                    </div>
                </div>
                {/* ****** */}
                <div className='img-contact'>
       
                </div>
 
            </div>
        </div>

    )
}
export default Contact