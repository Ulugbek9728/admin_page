import React, {useReducer} from 'react';
import "./user_add.css";
import axios from "axios";
import {useHistory} from 'react-router-dom';


const ACTIONS = {
    USER_ADD: "user-add"
};

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.USER_ADD:
            state = {
                user: {
                    ...state.user,
                    [action.payload.key]: action.payload.value
                }
            };
            break;
    }
    return state;
}

function UserAdd(props) {

    const history = useHistory();

    const initialuser = {
        username: "",
        phone_number: "",
        password: "",
        full_name: "",
        user_role: ""
    };

    const [state, dispatch] = useReducer(reducer, {user: initialuser});

    function getInputValues(e) {
        dispatch({
            type: ACTIONS.USER_ADD,
            payload: {
                key: e.target.name,
                value: e.target.value
            }
        })
    }
    function addUser() {
        axios.post("/api/sololearn/user/add", state.user).then((response) => {
            if (response.data.status_code === 0) {
                history.push("/admin")
            }

        })
    }

    return (
       <>
           <div className="container-fluid register">
               <div className="row">
                   <div className="col-md-5 offset-7">
                       <div className="form">
                           <div className="create">Sign Up</div>
                           <div className="form-group mt-3">
                               <label className="text-dark" htmlFor="full_name">Full name</label>
                               <input id="full_name" name="full_name" onChange={getInputValues} type="text"
                                      className="mt-2 form-control"/>
                           </div>
                           <div className="form-group mt-3">
                               <label className="text-dark" htmlFor="username">Username</label>
                               <input id="username" name="username" onChange={getInputValues} type="text"
                                      className="mt-2 form-control"/>
                           </div>
                           <div className="form-group  mt-3">
                               <label className="text-dark" htmlFor="password">Password</label>
                               <input id="password" name="password" onChange={getInputValues} type="password"
                                      className="mt-2 form-control"/>
                           </div>
                           <div className="form-group  mt-3">
                               <label className="text-dark" htmlFor="phone_number">Phone number</label>
                               <input id="phone_number" name="phone_number" onChange={getInputValues}
                                      type="password" className="mt-2 form-control"/>
                           </div>
                           <div className="form-group  mt-3">
                               <label className="text-dark" htmlFor="user_role">User role</label>
                               <select className="form-control" name="user_role" id="user_role" onClick={getInputValues}>
                                   <option value="ADMIN">ADMIN</option>
                                   <option value="SUPER_ADMIN">SUPER ADMIN</option>
                                   <option value="USER">USER</option>
                               </select>
                           </div>
                           <button onClick={addUser} className="btn btn-primary ant-btn-block mt-3">Sign Up</button>
                       </div>

                   </div>
               </div>
           </div>
       </>

    );
}

export default UserAdd;