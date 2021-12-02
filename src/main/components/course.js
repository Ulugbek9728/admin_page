import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./course.scss"
import {Link} from "react-router-dom";

function Course(props) {

    const [courseList, setCourseList] = useState([]);

    useEffect(() => {
        axios.get("/api/sololearn/course/list").then((response) => {
            setCourseList(response.data.data)
        })
    }, []);

    return (
        <div className="container course">
            <div className="row">
                <h3>What would you like to learn?</h3>
                <div className="col-md-8 offset-2">
                    <div className="row">
                        {courseList.map((item, index) => {
                            return <Link to={"/chapter/"+item.id} className="col-md-3">
                                <div className="card box">
                                    <div className="img_box">
                                        <img src={item.image_url} alt=""/>
                                    </div>
                                    <h6>{item.name}</h6>
                                    <p>6.8 M Learners</p>
                                </div>
                            </Link>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Course;