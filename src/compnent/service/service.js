
import './service.css'
import servicepic1 from '../image/service1.png'
import servicepic2 from '../image/service2.png'
import servicepic3 from '../image/service3.png'

const Service = () => {
    return(
        <div className="service">

            <div className='service-cont'>

                <div className='service-header'>
                    <h3>Service</h3>
                </div>


                    <div className='service-cont2'>
                    <div className='one'>
                    <div className='service-logo'>
                        <img src={servicepic1} alt='service-logo'></img>
                    </div>
                    <div>
                        <div><h3>A Leader</h3></div>
                        <div><p>
                            I'm a seasoned professional 
                            who has dedicated a significant portion 
                            of his career to the dynamic world of 
                            marketing and sales. 
                            </p></div>
                    </div>
                </div>
                {/*  */}
                <div  className='two one'>
                <div className='service-logo'>
                        <img src={servicepic2} alt='service-logo'></img>
                    </div>
                    <div>
                        <div><h3>A Leader</h3></div>
                        <div><p>
                            I'm a seasoned professional 
                            who has dedicated a significant portion 
                            of his career to the dynamic world of 
                            marketing and sales. 
                            </p></div>
                    </div>
                </div>
                {/*  */}
                <div className='three one'>
                    <div className='service-logo'>
                        <img src={servicepic3} alt='service-logo' ></img>
                    </div>
                    <div>
                        <div><h3>A Leader</h3></div>
                        <div><p>
                            I'm a seasoned professional 
                            who has dedicated a significant portion 
                            of his career to the dynamic world of 
                            marketing and sales. 
                            </p></div>
                    </div>
                </div>
                    </div>
            </div>
        </div>
    )
}
export default Service