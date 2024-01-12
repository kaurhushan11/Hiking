import React from "react";

import img1 from '../Images/nationalParkImg.png';
import img2 from '../Images/sunMountainLogo.png';
import { Link } from "react-router-dom";

function Promo(){
    return(
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={img1} className="d-block w-100 promo-img" alt="img1"/>
                    <div className="carousel-caption promo1 d-md-block">
                        <h1 className="h1-promo">BIG BEND NATIONAL PARK <br/>HIKING GUIDE</h1>
                        <h5 className="h5-promo">THIS HIKE IS THE NEXT <br/> BEST OPTION.</h5>
                        <p className="p-promo">BEST HIKING EXPERIENCE</p>
                        <button type="button" class="btn text-white btn-outline-info btn-promo btn-sm"><Link class="text-decoration-none text-white" to="/class">see more</Link></button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={img1} className="d-block w-100 promo-img" alt="img1"/>
                    <div className="carousel-caption d-md-block promo2">
                        <h3 className="h3-promo">The asanas purify our body and <br/> keep it healthy, making it a suita- <br/>ble vehicle for the soul.</h3>
                        <img src={img2} className="img-fluid img-promo2 mt-4" width={65}/>
                        <button type="button" class="btn text-white btn-outline-info btn_div4 ms-5 mt-4 btn-promo2 btn-sm"><Link class="text-decoration-none text-white" to="/class">see more</Link></button>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
export default Promo;