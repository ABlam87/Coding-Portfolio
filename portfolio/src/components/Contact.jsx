import React from "react";

const Contact = function() {
    return <div>

        <br></br>

        <section className="container-fluid row" id="contactMe">
            
        <div className="col-md-3 contactHead">
            <h1>Contact Me</h1>
        </div>

        <div className="col-md-3 contactCopy">
            <img src="./src/assets/images/email icon.png" style={{width: "50px"}}></img>
            <p>adamblampied@gmail.com</p>
        </div>

        <div className="col-md-3 contactCopy">
        <img src="./src/assets/images/Mobile-Smartphone-Icon.png" style={{width: "50px"}}></img>
            <p>(+44)7966039290</p>
        </div>

        <div className="col-md-3 contactCopy">
            <img src="./src/assets/images/X_IG_icon.png" style={{width: "110px"}}></img>
            <p>@adamtheblampied</p>
        </div>

    </section>

    <section id='linkedin' className="row">
    <div className="col-md-3 contactHead">
            <h1>LinkedIn</h1>
        </div>

        <div className="col-md-9 contactCopy">
            <p>linkedin link</p>
        </div>
    </section>
    </div>
}

export default Contact