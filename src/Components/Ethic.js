import React from "react";

import img1 from "../Images/leaveNoTrace.png";
import img2 from "../Images/Fire.jpg";
import img3 from "../Images/SafetyAid.png";

function Ethic(){
    return(
        <section className="ethic my-5 text-center" id="ethic">
            <div className="container">
            <div className="text-center my-5">
                <h1>Ethics</h1>
                <hr className="w-25 mx-auto"/>
            </div>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <div className="card">
                    <div className="card-body">
                    <img src={img1} width={200} className="img-fluid rounded-circle border border-primary p-2"/>
                    <h5 className="card-title mt-4">Leave No Trace</h5>
                    <p className="card-text text-center">Emphasize the Leave No Trace principles, which are guidelines for minimizing your impact on the environment when hiking</p>
                    </div>
                </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <div className="card">
                    <div className="card-body">
                    <img src={img2} width={215} className="img-fluid rounded-circle border border-primary p-2"/>
                    <h5 className="card-title mt-4">Fire and Camping Practices</h5>
                    <p className="card-text text-center"> fire safety and camping practices, including following local regulations, using established fire rings</p>
                    </div>
                </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                <div className="card">
                    <div className="card-body">
                    <img src={img3} width={200} className="img-fluid rounded-circle border border-primary p-2"/>
                    <h5 className="card-title mt-4">Safety and Preparedness</h5>
                    <p className="card-text text-center">Stress the importance of being well-prepared for hikes to ensure personal safety and the safety of others</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
}
export default Ethic;