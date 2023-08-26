import './project.css'
import pic1 from './image/pro1.png'
import pic2 from './image/pro2.jpg'
import pic3 from './image/pro3.jpg'





const Project = () => {
 
    function downloadImage(url, name) {
        const link = document.createElement('a');
        link.href = url;
        link.download = name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const handleDownload = () => {
        const imageUrl = require("../../pdf/p1.pdf") // Replace with your image URL
        const imageName = 'name.pdf'; // Replace with your desired image name
        downloadImage(imageUrl, imageName)};



        // *************************
 
    
        const handleDownloader2 = () => {
            const imageUrl = require("../../pdf/p1.pdf") // Replace with your image URL
            const imageName = 'name.pdf'; // Replace with your desired image name
            downloadImage(imageUrl, imageName)};

            // **********************

            const handleDownloader3 = () => {
                const imageUrl = require("../../pdf/p1.pdf") // Replace with your image URL
                const imageName = 'name.pdf'; // Replace with your desired image name
                downloadImage(imageUrl, imageName)};


    return (
        <div className='project' id='project'>
            <div className='work-head'>
                <h1><span>P</span>roject</h1>
            </div>
                {/* PROJECT */}
                <div className='project-sec'>
                    <div className='proj-sec1'>
                        <div className='portfolio-cont'>
                            <div className='portfolio-pic'>
                                {/* IMAGE  */}
                                <a href='#' onClick={handleDownload}><img src={pic2}></img></a>
                                {   /* OVERLAY */}
                                <div className='portfolio-overlay'>
                                    <h2>Project 1</h2>
                                    <p>leoremmmbgjbf fgnkgnbgn</p>
                                </div>

                            </div> 
                        </div>
 



                        {/* PROJECT 2 */}
                        
                    </div>

                    {/* PROJECT 2 */}
                                            <div className='portfolio-cont'>
                            <div className='portfolio-pic'>
                                {/* IMAGE  */}
                                <a href='#' onClick={handleDownloader2}><img src={pic1}></img></a>
                                {   /* OVERLAY */}
                                <div className='portfolio-overlay'>
                                    <h2>Project 2</h2>
                                    <p>leoremmmbgjbf fgnkgnbgn</p>
                                </div>

                            </div> 
                        </div> 

                        {/* PROJECT 3 */}
                        <div className='portfolio-cont'>
                            <div className='portfolio-pic'>
                                {/* IMAGE  */}
                                <a href='#'  onClick={handleDownloader2}><img src={pic3}></img></a>
                                {   /* OVERLAY */}
                                <div className='portfolio-overlay'>
                                    <h2>Project 3</h2>
                                    <p>leoremmmbgjbf fgnkgnbgn</p>
                                </div>

                            </div> 
                        </div>

                    
                </div>
           






           
        </div>
    )
}
export default Project






