import React, {useEffect, useState, useContext} from 'react';
import axios from "axios";
import data from "bootstrap/js/src/dom/data";
import {CourseContext} from "../add_course";

function AddCourseChapter(props) {

    const context = useContext(CourseContext);
    const [courseChapter,setCourseChapter]= useState({name:'',content_type:'',base64:'',course_id:1});
    const [text,setText]= useState('');
function addChapter() {
    axios.post("/api/sololearn/course/chapter/add", courseChapter, {
        headers:{
            "Authorization": localStorage.getItem("token")
        }
    }).then((response)=>{
        setText(response.data.message)
    })
}
    function handleInputChange(event) {
        let files = event.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);

        reader.onload = (e) => {
            setCourseChapter({
                ...courseChapter,
                base64: e.target.result.substring(22),
                content_type: ".png"
            })
        }

    }

    return (
        <div>
            <div className="container-fluid COURSE">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form">
                            <div className="create">ADD COURSE CHAPTER</div>
                            <h4 className="text-center text-success">{text}</h4>
                            <div className="form-group mt-3">
                                <label className={"text-dark"} htmlFor="name">course chapter name</label>
                                <input onChange={(e)=>setCourseChapter({...courseChapter, name: e.target.value})}
                                       id="name" name="name" type="text" className="mt-2 form-control"/>
                            </div>
                            <div className="form-group mt-3">
                                <label className={"text-dark"} htmlFor="name">Choose course</label>
                                <select name="" id="" className="form-control"
                                        onClick={(e)=>setCourseChapter({...courseChapter,course_id: e.target.value})}>
                                    {context.courseList.map((item, index) => {
                                        return <option  value={item.id}>
                                            {item.name}
                                        </option>
                                    })}
                                </select>
                            </div>
                            <div className="form-group mt-3">
                                <label className={"text-dark"} htmlFor="file">Choose image</label>
                                <input id="file" onChange={handleInputChange} type="file"
                                       className="mt-2 form-control"/>
                            </div>
                            <button onClick={addChapter} className="btn btn-primary ant-btn-block mt-3">Add course chapter</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default AddCourseChapter;