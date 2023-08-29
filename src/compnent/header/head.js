 
 import logopic from "../image/favicon.ico.png"
import "../image/dot-about3.png"
import './style.css';   


function header(){
    const slider = ()=>{

        let hamburger = document.querySelector('.menu');
        let navi = document.querySelector('.navbar')
        hamburger.addEventListener('click',()=>{ 
            navi.classList.toggle("nav-active") 
                   //BURGER ANIMATION 
                   hamburger.classList.toggle("toggle")
        }) 
        window.onscroll = () => {
            navi.classList.remove("nav-active")
            hamburger.classList.remove("toggle")
        }
    }
    
 
    return ( 
        <header className="header" id="home">
            <a href="#" className="logo">
                <img className='logo-img' src={logopic} alt='logo'></img> 
                <h2>Isaac Magnus</h2>
            </a> 
            <div class="navbar">  
            <div class="list">  
                <a href="#work" title="Work" class="work act" >
                    About 
                </a> 
                <a Link to ="#project" target="_blank" title="Project" class="contact act">
                    Project
                </a>
                <a href="#contact" title="Contact" class="contact act">
                    Contact
                </a>
            </div> 
            {/* CONNECT NAV */}
            <div class="links">  
                <a href="#" target="_blank"> <i class="fa-brands fa-github"></i></a>
                <a href="#" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                <a href="#" target="_blank"> <i class="fa-brands fa-x-twitter"></i></a>  
            </div>  
            </div> 
            {/* MENU BUTTON */}
            <div class="menu " onClick={slider}>
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>  
        </header> 
    )
}
export default header









