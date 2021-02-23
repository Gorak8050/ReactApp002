import React from 'react'
import img1 from './images/banners/banner1.png' // relative path to image 
import img2 from './images/banners/banner2.png' // relative path to image 
import img3 from './images/banners/banner1.png' // relative path to image 
import './CSS/home.css';

function Home() {
    return (
        <div className='home'>
            {/* <h1>Welcome Home</h1> */}
            <div className='row col-sm-12' >
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner">
                        <div className="item active"><img src={img1} alt="Los Angeles"/> </div>

                        <div className="item">  <img src={img2} alt="Chicago" />  </div>

                        <div className="item">  <img src={img3} alt="New York" /> </div>
                    </div>

                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

            <div className='row col-sm-12' >
                <div className='cold-sm-12 heading-block'>
                    <h1> Block 1 </h1>
                </div>
            </div>

            <div className='row col-sm-12 ' >
                <div className='cold-sm-12 heading-block'>
                    <h1> Block 2 </h1>
                </div>
            </div>

            <div className='row col-sm-12' >
                <h1> Block 3 </h1>
            </div>

            <div className='row col-sm-12' >
                <h1> Block 4 </h1>
            </div>

            <div className='row col-sm-12' >
                <h1> Block 5 </h1>
            </div>

        </div>
    );
}

export default Home;
