import React, {useState} from 'react';
import "./authentication.css"
import axios from "axios";
import {useHistory} from "react-router-dom"
import {connect} from "react-redux";
import {SET_AUTH} from "../../../actions/action";



function Authentication(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [text, setText] = useState('');
    const history = useHistory();

    function login() {
        axios.post("/api/sololearn/user/login",{username:username,password:password}).then((response)=>{
            setText(response.data.message);
            if (response.data.status_code === 0){
                console.log(response.data.data);
                localStorage.setItem("token", response.data.data.token);
                props.setAuth(username);
                if (response.data.data.is_user)
                    history.push("/");
                else  history.push("/admin/main");
            }

        }).catch((error)=>{
            if (error.response.status >= 500)
                setText("server connection error");
        })
    }

    return (

        <>
            <div className="container-fluid py-0 authentication">
                <div className="row">
                    <div className="col-md-4 offset-2">
                        <div className="form">
                            <div className="create">Sign In</div>
                            <div className="all-input mt-3">
                                <img src="../user.png" alt="user-icon"/>
                                <input placeholder="name" onChange={(e) => setUsername(e.target.value)} type="text"
                                       className="mt-2 "/>
                            </div>
                            <div className="all-input  mt-3">
                                <img src="../padlock.png" alt="pasword-icon"/>
                                <input placeholder="password" onChange={(e) => setPassword(e.target.value)}
                                       type="password"
                                       className="mt-2 "/>
                            </div>
                            <button onClick={login} className=" mt-3 btn btn-primary ant-btn-block">Sign In</button>
                            <h4 className="text-danger mt-3">{text}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
function mapDispatchToProps(dispatch) {
    return {setAuth: (username) => {
            return dispatch({
                type: SET_AUTH,
                payload: username
            })
        }
    }
};

export default connect(null, mapDispatchToProps) (Authentication);