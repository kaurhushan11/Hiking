import React from "react";

import img1 from "../Images/s2.jpg";
import img2 from "../Images/s3.jpg";
import img3 from "../Images/s4.jpg";

function Teams(){
    return(
        <section className="team my-5 text-center" id="team">
            <div className="container">
            <div className="text-center my-5">
                <h1>Our Team</h1>
                <hr className="w-25 mx-auto"/>
            </div>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <div className="card">
                    <div className="card-body">
                    <img src={img3} width={200} className="img-fluid rounded-circle border border-primary p-2"/>
                    <h5 className="card-title mt-4">Andrew</h5>
                    <p className="card-text">Founder</p>
                    </div>
                </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <div className="card">
                    <div className="card-body">
                    <img src={img1} width={200} className="img-fluid rounded-circle border border-primary p-2"/>
                    <h5 className="card-title mt-4">Karen D'souza</h5>
                    <p className="card-text">Local Guides</p>
                    </div>
                </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <div className="card">
                    <div className="card-body">
                    <img src={img2} width={200} className="img-fluid rounded-circle border border-primary p-2"/>
                    <h5 className="card-title mt-4">Kristina</h5>
                    <p className="card-text">Community Moderator</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
}
export default Teams;