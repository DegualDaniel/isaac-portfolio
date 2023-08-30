import './home.css';
import '../image/isac.png'  

function Home(){
return(
    
// <!-- *********HERO SECTION************ -->
<div class="hero-section" id="home"> 
    <div className='box1'></div>

    <div className='box2'>
    <div class="hero-cont">
       <div class="hero-1" data-aos="fade-down" data-aos-duration="1500">
           <div class="hero-head " >
               <h1>Isaac Magnus</h1>
           </div>
           <div class="hero-text" >
                <p>A contemplative coder and analyst, with 7+ years of experience 
                    Inspired by tough problems and currently shaping the future of 
                    effective learning.
                </p>
           </div>
                <div class="hero-links">  
                   <a href="#" target="_blank"> <i class="fa-brands fa-github"></i></a>
                   <a href="#" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                   <a href="#" target="_blank"> <i class="fa-brands fa-x-twitter"></i></a> 
               </div> 
       </div>  

       {/* HERO IMAGE */}
       <div class="hero-2">
           <div className='img-cont'> 
               <div className='hero-ppic'>
               </div>
           </div> 

       </div>
   </div> 


    </div>
</div>
)
}
export default Home

