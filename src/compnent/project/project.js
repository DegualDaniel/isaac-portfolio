import './project.css'
import pic1 from '../image/pro1.png'
import pic2 from '../image/pro2.jpg'
import pic3 from '../image/pro3.jpg'

 
const Project = () => { 
    function downloadImage(url, name) {
        const link = document.createElement('a');
        link.href = url;
        link.download = name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const handleDownloader1 = () => {
        const imageUrl = require("../../pdf/p2.pdf") // Replace with your image URL
        const imageName = 'Data Model.pdf'; // Replace with your desired image name
        downloadImage(imageUrl, imageName)};



        // *************************
 
    
        const handleDownloader2 = () => {
            const imageUrl = require("../../pdf/p1.pdf") // Replace with your image URL
            const imageName = 'Sales-Table.pdf'; // Replace with your desired image name
            downloadImage(imageUrl, imageName)};

            // **********************

            const handleDownloader3 = () => {
                const imageUrl = require("../../pdf/p3.pdf") // Replace with your image URL
                const imageName = 'name.pdf'; // Replace with your desired image name
                downloadImage(imageUrl, imageName)};


                const handleDownloader4 = () => {
                    const imageUrl = require("../../pdf/a.jpeg") // Replace with your image URL
                    const imageName = 'Nortwind.pdf'; // Replace with your desired image name
                    downloadImage(imageUrl, imageName)};
        
                    // **********************
        

    return (
        <div className='project' id='project'>
            <div className='work-head'> 
                <div className='title'><h3>select project</h3></div>
                
                <div className='line'></div>
            </div>

                {/* PROJECT */}
                <div className='project-sec'> 
                        <div className='portfolio-cont'>
                            <div className='portfolio-pic'>
                                {/* IMAGE  */}
                                <div>
                                    <a href='#' onClick={handleDownloader2}><img src={pic2}></img></a>
                                </div>
                                 
                                {   /* OVERLAY */}
                                <div className='portfolio-overlay'>
                                    <h2>Sales Table</h2>
                                    <p>Generating Sales Table</p>
                                </div>

                            </div> 
                        </div> 

                    {/* PROJECT 2 */}
                        <div className='portfolio-cont'>
                            <div className='portfolio-pic'>
                                {/* IMAGE  */}
                                <div>
                                     <a href='#' onClick={handleDownloader1}><img src={pic1}></img></a>
                                </div>
                                 
                                {   /* OVERLAY */}
                                <div className='portfolio-overlay'>
                                    <h2>Data Model</h2>
                                    <p>Creating Data Model</p>
                                </div>
                            </div> 
                        </div> 

                    {/* PROJECT 3 */}
                    <div className='portfolio-cont project-3'>
                            <div className='portfolio-pic'>
                                {/* IMAGE  */}
                                <div>
                                    <a href='#'  onClick={handleDownloader3}><img src={pic3}></img></a>
                                </div>
                                
                                {   /* OVERLAY */}
                                <div className='portfolio-overlay'>
                                    <h2>Nortwind Orders</h2>
                                    <p> Nortwind Orders Report</p>
                                </div>

                            </div> 
                    </div>
 

                    
                </div>
           






           
        </div>
    )
}
export default Project






