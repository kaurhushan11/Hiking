import React from "react";

import bgimg1 from "../Images/UpImage1.png";
// import bgimg2 from "../Images/blueTriangle.png";

function Home(){
    return(
        <>
            <div className="home-img">
                <img src={bgimg1} className="img-fluid bg-img"/>
                <h1 className="head-text1 ps-5">Discover your<br/>next Hike</h1>
                <p className="head-text2 ps-5">DISCOVER YOUR<br/>NEXT HIKE</p>
                <p className="head-text3 ps-5">The climb speaks to our character,<br/>but the view,<br/>I think, to our souls.</p>
            </div>
        </>
    );
}
export default Home;