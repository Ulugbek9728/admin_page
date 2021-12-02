import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";

function NavbarQismi(props) {

    const [logout, setLogout] = useState(false);

    function signOut() {
        localStorage.removeItem("user-info");
        localStorage.removeItem("token");
        window.location.reload();
    }

    function logOut() {
        setLogout(!logout);
    }

    return (
        <div>
            <div className="navbar">
                <nav className="navbar navbar-expand-sm justify-content-between">
                    <div className='left d-flex align-items-center'>
                        <Link to={"/"} className='mx-4'>
                            <img src="../SoloLearn_logo.png" alt=""/>
                        </Link>
                    </div>
                    <div className='right d-flex justify-content-around align-items-center'>
                        <ul className="navbar-nav mx-4">
                            <li className="nav-item">
                                <Link to={"/course"} className="nav-link" href="#">Courses</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Code Playground</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Discuss</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Get Pro</a>
                            </li>
                        </ul>
                        {props.isAuth ? <div className="UserProfil ">
                                <h5 onClick={logOut} className="User"> {props.username.slice(0, 1)}</h5>
                                {logout ? <div className="profile">
                                    <div className="NameUser"> {props.username}</div>
                                    <div className="line"></div>
                                    <div className="SignOut">
                                        <div className="logOutMain">
                                            <div>
                                                <img className="signImg" src="/settings.png" alt=""/>
                                            </div>

                                            <div className='settings'>
                                                Settings
                                            </div>
                                        </div>
                                        <div className="logOutMain">
                                            <img className="signImg" src="/help.png" alt=""/>
                                            <div className='help'>
                                                Help
                                            </div>
                                        </div>
                                        <div onClick={signOut} className="logOutMain">
                                            <div className="d-flex">
                                                <img className="signImg" src="/logout.png" alt=""/>
                                                <div className="logOut">Log Out</div>
                                            </div>

                                        </div>
                                    </div>
                                </div>  : ""}
                            </div> :
                                <>
                                    <Link to={"/admin"}>
                                        <button type='button' className='btn btn-outline-primary'>Log in</button>
                                    </Link>

                                    <Link to={"/admin/register"}>
                                        <button type='button' className='btn btn-primary mx-4'>Register</button>
                                    </Link>
                                </>
                        };
                    </div>
                </nav>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        isAuth: state.userReduc.isAuth,
        username: state.userReduc.username
    }
}

export default connect(mapStateToProps) (NavbarQismi);