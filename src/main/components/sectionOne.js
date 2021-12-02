import React from 'react';
import Carousel from "react-elastic-carousel"
import "./sectionOne.scss"
import {Link} from "react-router-dom";


function SectionOne(props) {
    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 500, itemsToShow: 2},
        {width: 768, itemsToShow: 5},
        {width: 1200, itemsToShow: 5}
    ];

    return (
        <>
            <div className="sectionOne">
                <div className="box">
                    <Carousel className="carusel" breakPoints={breakPoints}>
                        <div className="card">
                            <img src="coding.png" alt=""/>
                            <h5> Lorem ipsum dolor.</h5>
                        </div>
                        <div className="card">
                            <img src="coding.png" alt=""/>
                            <h5> Lorem ipsum dolor.</h5>
                        </div>
                        <div className="card">
                            <img src="coding.png" alt=""/>
                            <h5> Lorem ipsum dolor.</h5>
                        </div>
                        <div className="card">
                            <img src="coding.png" alt=""/>
                            <h5> Lorem ipsum dolor.</h5>
                        </div>
                        <div className="card">
                            <img src="coding.png" alt=""/>
                            <h5> Lorem ipsum dolor.</h5>
                        </div>
                        <div className="card">
                            <img src="coding.png" alt=""/>
                            <h5> Lorem ipsum dolor.</h5>
                        </div>
                        <div className="card">
                            <img src="coding.png" alt=""/>
                            <h5> Lorem ipsum dolor.</h5>
                        </div>
                        <div className="card">
                            <img src="coding.png" alt=""/>
                            <h5> Lorem ipsum dolor.</h5>
                        </div>

                    </Carousel>
                </div>

            </div>
            <div className="sectionTwo">
                <div className="box2">
                    <div className="card">
                        <div className="card-header">
                            <img src="Tailored.svg" alt=""/>
                        </div>
                        <div className="card-body">
                            <h1 className="text-center">Tailored to you</h1>
                            <p className="text-center">No matter your experience level, you'll be writing
                                <b> real, functional code within
                                    minutes </b>
                                of starting your first course.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <img src="Bite-sized.svg" alt=""/>
                        </div>
                        <div className="card-body">
                            <h1 className="text-center">Bite-sized</h1>
                            <p className="text-center">Go step-by-step through our unique courses. Assess what you’ve
                                learned with in-lesson quizzes, and
                                <b> gradually advance your skills with practice.</b>
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header">
                            <img src="Get-proof.svg" alt=""/>
                        </div>
                        <div className="card-body">
                            <h1 className="text-center">Get proof</h1>
                            <p className="text-center">
                                <b>Earn a certificate </b>
                                to validate your newly acquired skills.
                                Post it on social for others to see.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="box3">
                    <div className="boxLeft">
                        <div className="cardLeft">
                            <h1>Learning on the go</h1>
                            <p>
                                <b>Learn on the web or on the go. </b>Sololearn is always ready for you and you'll never
                                lose your
                                place.
                            </p>

                            <div className="d-flex knopka">
                                <a target="_blank"
                                   href="https://apps.apple.com/us/app/sololearn-learn-to-code/id1210079064">
                                    <img src="apple1.png" alt=""/>
                                    <div className="appStorm">
                                        <p>Download on the</p>
                                        <h5>App Store</h5>
                                    </div>
                                </a>
                                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.sololearn">
                                    <img src="play-market.png" alt=""/>
                                    <div className="appStorm">
                                        <p>GET IT ON</p>
                                        <h5>Google Play</h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="cardRight">
                            <img src="phone.svg" alt=""/>
                        </div>
                    </div>
                    <div className="boxRight">
                        <div className="card">
                            <div className="card-header">
                                <img src="More-than-20-courses.svg" alt=""/>
                            </div>
                            <div className="card-body">
                                <h1 className="text-center">More than 20 courses</h1>
                                <p className="text-center">
                                    From Python, through data, to web dev.
                                    <b> We got everything you need.</b>
                                    <br/>
                                    <br/>
                                    <Link to={"/course"}>
                                        Go to courses >
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SectionOne;