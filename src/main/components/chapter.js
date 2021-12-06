import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import "./chapter.scss"

function Chapter(props) {
    const [course, setCourse] = useState({});
    const [courseChapter, setCourseChapter] = useState([]);
    const [courseLesson, setCourseLesson] = useState([""]);
    const [courseChapterId, setcourseChapterId] = useState(0);

    useEffect(() => {
        axios.get("/api/sololearn/course/chapter/" + props.match.params.id).then((response) => {
            setCourseChapter(response.data.data)
        });

        axios.get("/api/sololearn/course/list").then((response) => {
                Array.from(response.data.data).forEach((item) => {
                    if (item.id === parseInt(props.match.params.id)) {
                        setCourse(item);
                    }
                })
            }
        )
    }, []);


    function getCourseChapter(id) {
        setcourseChapterId(id);
        axios.get("/api/sololearn/user/lesson/list/" + id, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        }).then((res) => {
            setCourseLesson(sort(res.data.data));
        });
    }

    function completeLesson(id) {
        axios.get("/api/sololearn/course/chapter/lesson/complete/" + id, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        }).then((res) => {
            getCourseChapter(courseChapterId);
        });
    }

    function sort(arr) {
        let newArr = Array.from(arr);
        for (let i = 0; i < newArr.length; i++) {
            for (let j = 0; j < newArr.length; j++) {
                if (newArr[i].id < newArr[j].id) {
                    let temp = newArr[i];
                    newArr[i] = newArr[j];
                    newArr[j] = temp;
                }
            }
        }
        return newArr;
    }


    return (
        <div className={"mainChapter"}>
            <Link to={"/course"}>
                <img src="../../previous.png" alt=""/>
                <p>Back to courses</p>
            </Link>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="course">
                            <div className="img_box">
                                <img src={course.image_url} alt=""/>
                            </div>
                            <div>
                                <h2>{course.name}</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Cumque distinctio ducimus ea et
                                    eum explicabo harum in labore laudantium magni molestiae!
                                </p>
                            </div>
                        </div>
                        {courseChapter.map((item, index) => {
                            return <div>
                                <div className="chapter" onClick={() => getCourseChapter(item.id)}>
                                    <div className="img_boxChapter">
                                        <img src={item.image_url} alt=""/>
                                    </div>
                                    <h3>{item.name}</h3>
                                </div>
                                {courseChapterId === item.id ? <div>
                                    <div className="lessonBox">
                                        {courseLesson.map((item, index) => {
                                            return <div onClick={() => completeLesson(item.id)}
                                                        className={item.is_open ? "cart" : "cart  disableddd"}>
                                                <div className="lessonCard">
                                                    {item.is_open === false ? <div className="sloy">
                                                        <img src="/lock.png" alt=""/>
                                                    </div> : ""}
                                                    <div className="LessonName">
                                                        {item.lesson_name}
                                                    </div>
                                                </div>
                                            </div>
                                        })}
                                    </div>
                                    <div className="clear"></div>
                                </div> : ""}
                            </div>
                        })}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Chapter;