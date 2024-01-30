import React from "react";

const Home = function() {
    return <div id = 'homePage'>
        <section className="container-fluid row" id="jumbotron">
            <img id='headshot' src="./src/assets/images/headshot 2.jpg" className="col-md-12 col-lg-3 jumboimg"></img>
            <div className="jumbotron jumbotron-fluid col-md-12 col-lg-9">
                <div className="container jumboCopy">
                    <h1 className="display-4"><span className="span1">Adam Blampied // Web Developer</span></h1>
                    <p className="lead"><span className="span2">Just don't fall in love with him.</span></p>
                </div>
            </div>
        </section>

        <br></br>

        <section className="container-fluid" id="skillSection">
            <div className="row">
                <div className="col-lg-4 col-md-12"  id="skillHead">
                    <h1>Skills</h1>
                </div>
                <div className="col-lg-8 col-md-12 row" id="skillCopy">
                    <div className="col-lg-2 col-md-4 col-sm-4">
                        <img src="./src/assets/images/html logo.webp" className="card-img-top" alt="HTML5"></img>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4">
                        <img src="./src/assets/images/css logo.webp" className="card-img-top" alt="CSS"></img>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4">
                        <img src="./src/assets/images/javascript icon.webp" className="card-img-top" alt="javascript"></img>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4">
                        <img src="./src/assets/images/Bootstrap_logo.svg.png" className="card-img-top" alt="Bootstrap"></img>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4" >
                        <img src="./src/assets/images/node icon.png" className="card-img-top" alt="Node"></img>
                    </div>
                    <div className="col-lg-2 col-md-4 col-sm-4">
                        <img src="./src/assets/images/react icon.png" className="card-img-top" alt="React"></img>
                    </div>
                </div>
            </div>

            <br></br>

            <div className="row">
                <div className="col-lg-4 col-md-12" id="resumeHead">
                    <h1>Resume</h1>
                </div>

                <div className="col-lg-8 col-md-12" id="resumeCopy">
                    <a href = './src/assets/files/Adam Blampied - CV 2024.pdf' target="_blank">Click here to see a PDF of my CV</a>
                </div>
            </div>

            <br></br>

            <div className="row">
                <div className="col-lg-4 col-md-12" id="aboutMeHead">
                    <h1>About Me</h1>
                </div>

                <div className="col-lg-8 col-md-12" id="aboutMeCopy">
                    <p>Hi there! I'm Adam, don't you look nice today. I'm fairly new to coding, receiving my ready-to-work qualification in 2024
                    Honestly, Front-end Web Development is something of a big career change for me. For the better part of the last decade, 
                    I've worked as a host on YouTube, fronting a variety of hobby and geek culture channels about wrestling, board games, movies, you name it.
                    However, YouTube gets you down after a while, and so I've decided to try my hand at making internet things behind-the-scenes rather than in front of a camera!</p>
                    <p>Below, you'll find all the applications that I've made thus far in my coding journey, as well as some 'comedy' placeholder images while I make enough stuff to fill the space. 
                    You'll have to forgive the fact that I think I'm funny.</p>
                </div>
            </div>
        
        </section>

    </div>;
}

export default Home