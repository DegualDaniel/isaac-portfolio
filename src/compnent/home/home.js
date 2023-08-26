import './home.css';
import pic from './image/isaac.jpg'

function Home(){
return(
    
// <!-- *********HERO SECTION************ -->
<div class="hero-section" id="home"> 
   <div class="hero-cont">
       <div class="hero-1" data-aos="fade-down" data-aos-duration="1500">
           <div class="hero-text">
               <h3> I am </h3>
           </div>
           <div class="hero-head " >
               <h1>Isaac Magnus</h1>
           </div>
           <div class="hero-text" >
                <p>Contemperative Coder and analyst. Inspired by tough problems.</p>
           </div>
           <button class="hero-btn">
               <a href="#">My Project</a> 
           </button>
       </div>  
       <div class="hero-2">
           <div className='img-cont'> 
                <img class="hero-img" src={pic} alt="hero-img"></img>
           </div> 
               <div class="hero-links">  
                   <a href="#" target="_blank"> <i class="fa-brands fa-github"></i></a>
                   <a href="#" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                   <a href="#" target="_blank"> <i class="fa-brands fa-x-twitter"></i></a> 
                   {/* <a href="https://gmail.com"><i class="fa-solid fa-envelope" target="_blank"></i></a>  */}
                   {/* <a href="#"> <i class="fa-brands fa-youtube"></i>  </a> */}
               </div> 
       </div>
   </div> 
</div>
)
}
export default Home

