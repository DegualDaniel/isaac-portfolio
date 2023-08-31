import './contact.css'
import resume from '../image/iconoir_arrow-tr.png' 
import v1 from '../image/Vector.png'
import v2 from '../image/Vector2.png'
import v3 from '../image/Vector3.png'
import v4 from '../image/Vector4.png'



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
                                <a href='#'> Twitter</a>
                                <a href='#'> Whatsapp</a>
                            </div>  
                        </div>


                    </div>

                    <div className='text2-3'> 
                            <div><p>Resume</p></div>

                            <div className='Social'>
                                <p> Download Resume</p>  
                                <div><a href='#'><img src={resume}></img> </a></div>
                            </div>  
                            
                        </div> 

                </div>
                {/* ****** */}
                <div className='img-contact'>
                    <div className='img-ct'>
                        <div className='v1'><img src={v4}></img></div>
                        <div className='v2'><img src={v1}></img></div>
                        <div className='v3'><img src={v2}></img></div>
                        <div className='v4'><img src={v3}></img></div>

                        {/* <img src={v4}></img>
                        <img src={v1}></img>
                        <img src={v2}></img>
                        <img src={v3}></img> */}

                    </div>
                </div>
 
            </div>
        </div>

    )
}
export default Contact