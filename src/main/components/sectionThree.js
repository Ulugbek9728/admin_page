import React from 'react';
import "./sectionThree.scss";

function SectionThree(props) {
    return (
        <div className="sectionThree">
            <h1>The perfect platform to boost <br/> your technical skills</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="perfect.svg" alt=""/>
                        <h1>Students</h1>
                        <p>Prepping for the big test or want to ace your first interview? Use Sololearn's real-world
                            practice to reinforce what you've learned and get you ready for that big moment.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src="perfect1.svg" alt=""/>
                        <h1>Professionals</h1>
                        <p>You can learn something totally new to advance your career. Or maybe you just want to knock
                            off the rust. Try Sololearn to get access to a variety of courses, from machine learning to
                            web development.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionThree;