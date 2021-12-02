import React from 'react';
import "./HomePage.scss"
import Main from "./components/main";
import SectionOne from "./components/sectionOne";
import SectionThree from "./components/sectionThree";

function HomePage(props) {
    return (
        <div className="homePage">
            <Main/>
            <SectionOne/>
            <SectionThree/>
        </div>
    );
}

export default HomePage;