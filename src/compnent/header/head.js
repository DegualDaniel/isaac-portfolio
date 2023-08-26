 
import logopic from "./image/favicon.ico.png";
import './style.css'; 

// import { Link } from 'react-router-dom';
// import { HashLink as Link } from 'react-router-hash-link';




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
                <img class="logo-img" src={logopic} alt="logo"></img>
                <h2>Isaac Magnus</h2>
            </a>

            <div class="navbar"> 

            <div class="list">
                <a href="#home" title="Home" class="home act">
                    Home
                </a>

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
                {/* <a href="https://gmail.com"><i class="fa-solid fa-envelope" target="_blank"></i></a>  */}
                {/* <a href="#"> <i class="fa-brands fa-youtube"></i>  </a> */}
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









