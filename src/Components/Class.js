import React from "react";

import img1 from '../Images/cross2.png';
import img2 from '../Images/dash.png';
import img3 from '../Images/activitiesImg.png';
import img4 from '../Images/HikingImg.png';
import img5 from '../Images/mountainsImg.png';
import img6 from '../Images/rockClimbImg.png';
import img7 from '../Images/Line.png';
import img9 from '../Images/blueCross.png';
import img10 from '../Images/freshAir.png';

function Class(){
    return(
        <section className="container">

            <div className="row classes">
                <div className="pt-4">
                    <h2 className="text-dark p1"><img className="img-fluid img_p1 me-4" src={img1} width={12} alt=""/> Hiking And Camping </h2>
                    <h2 className="ms-5"><b>Classes</b></h2>
                    <img className="img-fluid dash ms-5" src={img2} alt=""/>
                </div>
                
                <div className="col-md-4 act_div mt-5">
                    <img className="img-responsive center-block d-block mx-auto act_img " src={img3}/>
                    <h3 className="text-dark text-center mt-4">ACTIVITIES</h3>
                    <p className="text-center">Whether you're a seasoned trekker or a beginner looking to explore the great outdoors, we offer a plethora of options to suit your preferences.</p>
                </div>
                <div className="col-md-4 hike_div mt-5">
                    <img className="img-responsive center-block d-block mx-auto hike_img" src={img4}/>
                    <h3 className="text-dark text-center mt-4 mx-4">HIKING</h3>
                    <p className="text-center">With every step you take, you'll connect with nature, challenge your limits, and experience the transformative power of hiking.</p>
                </div>
                <div className="col-md-4 mount_div mt-5">
                    <img className="img-responsive center-block d-block mx-auto mount_img" src={img5}/>
                    <h3 className="text-dark text-center mt-4">MOUNTAINS</h3>
                    <p className="text-center">Whether you're a seasoned mountaineer or a novice yearning for the thrill of summiting, our site provides invaluable insights, trail maps, and gear recommendations. </p>
                </div>
            </div>

            <div className="row mt-5 ps-5 className-event">
                <div className="col-md-7">
                    <h1 className="text-dark h1_div3"> <b>ROCK <br/> CLIMBING</b></h1>
                    <h3 className="text-dark h3_div3 pt-4"><b>1. Classes & Events</b></h3>
                    <p className="text-dark p_div3">Hatha is the most classic yoga. Its origin <br/> is in the Raya Yoga of Patanjali and other <br/> classical texts such as <br/>
                    Bhagavad Gita and Hatha Yoga <br/> 
                    Pradipika.
                    </p>
                    <img className="img-fluid line_div3" src={img7}/>
                    <p className="text-dark p1_div3">10 modules <br/>
                    divided into 7 weekends
                    </p>
                    <div className="class-price pt-3">
                        <h5 className="text-dark h5_1div3 pe-5 cl-pr1"><b>Start <br/>
                        April 15 <br/>
                        20.00 hs</b>
                        </h5>
                        <h5 className="text-dark h5_2div3 mb-5 ps-3 cl-pr2"><b>
                        Price <br/>
                        $900 </b>
                        </h5>
                    </div>
                </div>

                <div className="col-md-5 pt-5">
                    <img className="img-fluid rounded-circle rock_div3" width={370} height={370} src={img6}/>
                    <img className="img-fluid img_div3" src="./orangeCross.png" alt=""/>
                    <h3 className="p2_div3 mt-5 mb-5"> <b> walking in nature <br/>
                    as a recreational <br/>
                    activity</b></h3>
                </div>
            </div>

            <div className="row pt-5">
                <div className="col-md-8 event-class">
                    <div>
                        <h2 className="text-dark h2_div5"><img className="img-fluid img_div5 me-4" src={img9} width={12}/>HOW TO RECOVER FROM </h2>
                        <h2 className="ms-5">A HIKE</h2>
                        <img className="img-fluid img2_div5 ms-5" src={img2}/>
                    </div>
                    <div className="mount_div5 pt-5">
                        <img className="img-fluid" src={img5}/>
                        <p className="text-dark h6_1div5 ps-5">- Mountain Treks for All Levels <br/>
                            - Legendary Landscapes <br/>
                            - Peak Bagging Pursuits <br/>
                            - Mountain Magic in Every Season
                        </p>
                    </div>
                    <div className="act_div5 pt-4">
                        <img className="img-fluid" src={img3}/>
                        <p className="text-dark h6_2div5 ps-5">- Solo Hiking <br/> 
                            - Hiking for Fitness <br/>
                            - Seasonal Hiking<br/>
                            - Camping and Backpacking <br/>
                            - Hiking Destinations 
                        </p>
                    </div>
                    <div className="hike_div5 pt-4">
                        <img className="img-fluid" src={img4}/>
                        <p className="text-dark h6_3div5 ps-5">- Embark on Epic Hikes <br/>
                            - Discover the Beauty of Nature <br/>
                            - The Path Less Traveled           
                        </p>
                    </div>
                </div>
                <div className="col-md-4 pt-5">
                    <img className="imgfresh_div5 rounded-circle center-block d-block mx-auto" src={img10} width={300} height={300}/>
                    <h3 className="h5_div5 pt-5">Make Sure Your <br/>
                    Gear Fits</h3>
                </div>
            </div>
        </section>
    );
}
export default Class;