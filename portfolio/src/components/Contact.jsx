import React from "react";

const Contact = function() {
    return <div id='contactPage' className="container-fluid row">

        <br></br>

        <section className="container-fluid" id="contactMe">
            
        <div className="col-md-12 contactHead">
            <h1><span>Contact Me</span></h1>
        </div>

        <div className="col-md-12 contactCopy row">
            <div className="card">
                <img src="./src/assets/images/email icon.png" style={{width: "50px"}}></img>
                <p>adamblampied@gmail.com</p>
            </div>

            <div className="card">
        <       img src="./src/assets/images/Mobile-Smartphone-Icon.png" style={{width: "50px"}}></img>
                <p>(+44)7966039290</p>
            </div>    
        
            <div className="card">
                <img class='ig' src="./src/assets/images/X_IG_icon.png" style={{width: "110px"}}></img>
                <p>@adamtheblampied</p>
            </div>

            <div className="card">
                <img src='./src/assets/images/linkedin icon.png'></img>
                <p><a href='https://www.linkedin.com/in/adam-blampied-7065a12b1' target="_blank">LinkedIn Profile</a></p>
            </div>    
    </div>

    </section>
    </div>
}

export default Contact