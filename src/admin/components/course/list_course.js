import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./course.css"

function ListCourse(props) {

    const [courseList, setCourseList] = useState([]);
    const [courseChapterList, setCourseChapterList] = useState([]);
    const [id, setId] = useState(0);

    useEffect(() => {
        axios.get("/api/sololearn/course/list").then((response) => {
            setCourseList(response.data.data)
        })
    }, []);

    function getCourseChapterList(id) {
        setId(id);
        axios.get("/api/sololearn/course/chapter/" + id).then((response) => {
            setCourseChapterList(response.data.data)
        })
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <tr>
                            <th>#</th>
                            <th>name</th>
                            <th>create date</th>
                        </tr>
                    </table>
                    {courseList.map((item, index) => {
                        return <div>
                            <div className="zzz" onClick={() => getCourseChapterList(item.id)}>
                                <div className="zzz1">{++index}</div>
                                <div className="zzz1">{item.name}</div>
                                <div className="zzz1">{item.created_date}</div>
                            </div>
                            {id === item.id ? <div>
                                    <table className={'table'}>
                                        <tr>
                                            <th>#</th>
                                            <th>name</th>
                                            <th>created date</th>
                                        </tr>
                                    </table>
                                    {courseChapterList.map((item,index)=>{
                                        return <div className="zzzz">
                                            <div className="zzz1">{++index}</div>
                                            <div className="zzz1">{item.name}</div>
                                            <div className="zzz1">{item.created_date}</div>
                                        </div>
                                    })}
                            </div>
                             : ""}
                        </div>
                    })}
                </div>
            </div>

        </div>
    );
}

export default ListCourse;