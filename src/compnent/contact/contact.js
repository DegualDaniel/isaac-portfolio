import './contact.css'
// import connectpic from './image/connect.webp' 
// import background from  './image/dot-about3.png'
// import bb from './image/connect.jpg'


const Contact = () => {
    return(
        <div className="contactsec"  id="contact" style={{
            // backgroundImage: `url(${background})`,
            // backgroundRepeat:'no-repeat'
        }}>
            <div className='connect-head'>
                {/* <img src={pic1}></img> */}
            </div>
            <div className='connect-cont'>
                <div className='cont-text1'>
                    <h3>
                    I am ready to embark on a journey that will not only 
                    fulfill my lifetime passion but also open doors to 
                    endless possibilities.
                    </h3>

                    {/* <div className='cont-link'>
                        <div> <a href="#" target="_blank"> <i class="fa-brands fa-github"></i></a>Github</div>
                    </div>
                    <div><a href="#" target="_blank"><i class="fa-brands fa-linkedin"></i>linkedin</a></div> */}
                    <div className='cont-link'> 
                    <a href="#" target="_blank"> <i class="fa-brands fa-github"></i> <p>Github</p> </a>
                   <a href="#" target="_blank"><i class="fa-brands fa-linkedin"></i><p>Linkedin</p></a>
                   <a href="#" target="_blank"> <i class="fa-brands fa-x-twitter"></i><p>Twitter</p></a>
                   <a href="#" target="_blank"> <i class="fa-brands fa-whatsapp"></i><p>Whatsapp</p></a> 
                    </div>

                </div>
                <div className='pic2'>
                    {/* <img className='con-pic' src={connectpic}></img> */}
                </div>
            </div>
        </div>
    )
}
export default Contact