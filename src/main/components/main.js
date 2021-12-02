import React from 'react';
import {Link} from "react-router-dom";

function Main(props) {
    return (
       <div className="main">
           <div className="container">
               <div className="row">
                   <div className="col-md-12">
                       <h1 className="mainTitle">The best way to learn to code</h1>
                       <p className="mainParagraf" >Courses designed by experts with real-world practice. <br/>
                           Join our global community. <span>It's free.</span>
                       </p>
                       <Link to={"/admin"} className={"button"}><button className="btn btn-primary"><b>Start learning now!</b></button></Link>
                   </div>
               </div>
           </div>
       </div>
    );
}

export default Main;