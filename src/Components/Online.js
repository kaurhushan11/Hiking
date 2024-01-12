import React from "react";

import { Link } from "react-router-dom";

import img1 from '../Images/nature.png';
import img2 from '../Images/loop.png';
import img3 from '../Images/dots.png';
import img4 from '../Images/line2.png';
import img5 from '../Images/park.png';
import img6 from '../Images/trail.png';
import img7 from '../Images/climb.png';
import img8 from '../Images/Line.png';

function Online(){
    return(
        <section className="container">
            <div className="row online-div1">
                <img src={img1} className="imd-fluid"/>
                <div className="inner-div1 ms-5 pt-5">
                    <h1 className="h1-online">walking in nature <br/>
                        as a recreational <br/> 
                        activity
                    </h1>
                    <h3 className="text-white h3-online pt-3">
                        .ACTIVITIES
                    </h3>
                    <p className="text-white p-online pt-3">In every walk with nature one receives<br/>far more than he seeks.
                    </p>
                </div>
            </div>

            <div className="row places-online">
                <h2 className="text-dark h2_div7 pt-5 ps-5">PLACES TO VISIT <br/>
                    IN AUTUMN
                </h2>
                <div className="col-md-4 loop_div7 pt-5">
                    <img className="img-responsive center-block d-block mx-auto img_div7 rounded-circle " src={img2}/>
                    <img className="img-fluid imgdot_div7" src={img3}/>
                    <h3 className="text-dark text-center mt-4 h3_div7">Mountain Loop</h3>
                    <p className="text-center p_div7">The Mountain Loop beckons hikers<br/>to explore its captivating beauty</p>
                    <img className="img-fluid imgline_div7" src={img4}/>
                    <p className="text-center ploc_div7"><b>Location</b> 0.3 miles.</p>
                </div>
                <div className="col-md-4 park_div7 pt-5">
                    <img className="img-responsive center-block d-block mx-auto img_div7 rounded-circle" src={img5}/>
                    <img className="img-fluid imgdot_div7" src={img3}/>
                    <h3 className="text-dark text-center mt-4 h3_div7">National Park</h3>
                    <p className="text-center p_div7">Our nation's natural treasures<br/>await your adventurous spirit</p>
                    <img className="img-fluid imgline_div7" src={img4}/>
                    <p className="text-center ploc_div7"><b>Location</b> 0.2 miles.</p>
                </div>
                <div className="col-md-4 trail_div7 pt-5">
                    <img className="img-responsive center-block d-block mx-auto img_div7 rounded-circle" src={img6}/>
                    <img className="img-fluid imgdot_div7" src={img3}/>
                    <h3 className="text-dark text-center mt-4 h3_div7">Canyon Trail</h3>
                    <p className="text-center p_div7">Journey into the depths of adventure as you<br/>explore the enchanting world of canyons</p>
                    <img className="img-fluid imgline_div7" src={img4}/>
                    <p className="text-center ploc_div7"><b>Location</b> 0.6 miles.</p>
                </div>
                <div className="text-center my-5">
                    <button type="button" className="btn text-dark btn-outline-info"><Link className="text-decoration-none text-dark" to="/class">see more</Link></button>
                </div>
            </div>

            <div className="row bg-dark">
                <div className="col-md-6 mt-5 online-col1">
                    <img className="img-responsive center-block d-block mx-auto w-50 rounded-circle imgclimb_div8 mt-5" src={img7}/>
                    <h5 className="h5-online text-center mt-5"> walking in nature <br/>
                    as a recreational <br/>
                    activity
                    </h5>
                </div>
                <div className="col-md-6 mt-5 online-col2 ps-5">
                    <h1 className="text-white h1_div8">Mountaineering <br/>
                    ice climbing
                    </h1>

                    <h5 className="text-white h5act_div8 pt-4">2. ACTIVITIES</h5>
                    <p className="text-white p_div8">Kundalini is the most classic yoga. Its <br/> 
                    origin is in the Raya Yoga of Patanjali <br/> and other classical texts such as <br/>
                    Bhagavad Gita and Hatha Yoga <br/>
                    Pradipika.
                    </p>
                    <img className="img-fluid img-online-col2" src={img8}/>
                    <p className="text-white pmod_div8">17 modules <br/>
                    divided into 5 weekends
                    </p>
                    <div className="online-price">
                        <h6 className="text-white online-price1">Start <br/>
                            April 15 <br/>
                            20.00 hs
                        </h6>
                        <h6 className="text-white online-price2 ps-5">
                            Price <br/>
                            $900
                        </h6>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Online;