import React, {createContext, useEffect, useState} from 'react';
import axios from "axios";
import AddCourseChapter from "./chapter/add-course-chapter";


export const CourseContext = createContext();

function AddCourse(props) {

    const [course, setCourse] = useState({name: "", base64: "", content_type: ""});
    const [text, setText] = useState("");
    const [courseList, setCourseList] = useState([]);

    useEffect(() => {
        axios.get("/api/sololearn/course/list").then((response) => {
            setCourseList(response.data.data)
        })
    });


    function handleInputChange(event) {
        let files = event.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);

        reader.onload = (e) => {
            setCourse({
                ...course,
                base64: e.target.result.substring(22),
                content_type: ".png"
            })
        }

    }

    function addCourse() {
        axios.post("/api/sololearn/course/add", course, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        }).then((response) => {
            setText(response.data.message);
            axios.get("/api/sololearn/course/list").then((response) => {
                setCourseList(response.data.data)
            })
        }).catch((error) => {
            if (error.response.status === 403) {
                setText("sizda amal bajarish uchun huquq yo'q")
            }
        })

    }

    return (
        <CourseContext.Provider value={{courseList: courseList}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="container-fluid COURSE">
                            <div className="row">
                                <div className="col-md-12 ">
                                    <div className="form">
                                        <div className="create">ADD COURSE</div>
                                        <h4 className="text-center text-success">{text}</h4>
                                        <div className="form-group mt-3">
                                            <label className={"text-dark"} htmlFor="name">Course name</label>
                                            <input id="name" name="name" onChange={(e) => setCourse
                                            ({
                                                ...course,
                                                name: e.target.value
                                            })} type="text"
                                                   className="mt-2 form-control"/>
                                        </div>
                                        <div className="form-group mt-3">
                                            <label className={"text-dark"} htmlFor="file">Choose image</label>
                                            <input id="file" onChange={handleInputChange} type="file"
                                                   className="mt-2 form-control"/>
                                        </div>
                                        <button onClick={addCourse} className="btn btn-primary ant-btn-block mt-3">Add
                                            course
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <AddCourseChapter/>
                    </div>
                </div>
            </div>
        </CourseContext.Provider>

    );
}

export default AddCourse;