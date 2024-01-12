import React from "react";

function Footer(){
    return(
        <>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5 className="text-dark h5_div10">ABOUT</h5>
              <p className="text-dark p_div10">Lorem ipsum dolor sit amet, consec <br/>
                tetur adipisicing elit, sed do eiusmod tempor incidi- <br/> dunt ultimam quantum
              </p>
              <img className="img-fluid img_div10" src="./Logo1.png"/>
            </div>
            <div className="col-md-6">
              <div className="row half_div10">

                <div className="col-md-4">
                  <h5 className="text-dark h5_1div10">ABOUT</h5>

                  <div className="para1">
                    <p>Team <br/>Join us <br/>Ethic <br/>Goals</p>
                  </div>

                </div>

                <div className="col-md-4">
                  <h5 className="text-dark h5_1div10">ABOUT</h5>

                  <div className="para1">
                    <p>Team <br/>Join us <br/>Ethic <br/>Goals</p>
                  </div>

                </div>

                <div className="col-md-4">
                  <h5 className="text-dark h5_1div10">ABOUT</h5>

                  <div className="para1">
                    <p>Team <br/>Join us <br/>Ethic <br/>Goals</p>
                  </div>

                </div>

              </div>
            </div>
            <img className="img-fluid imgfooter_div10" src="./footer.png"/>
          </div>
        </div>
        </>
    );
}
export default Footer;