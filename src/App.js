import React from 'react';
import {Route, Switch} from "react-router-dom";
import Main from "./admin/components/layout/main";
import Authentication from "./admin/components/authentification/authentication";
import HomePage from "./main/HomePage";
import UserAdd from "./admin/components/authentification/user-add";
import NavbarQismi from "./main/components/navbarQismi";
import Course from "./main/components/course";
import Chapter from "./main/components/chapter";


function App(props) {
    return (
        <>
            <NavbarQismi/>
            <Switch>
                <Route path={"/admin/main"} component = {Main}/>
                <Route path={"/admin/register"} component = {UserAdd}/>
                <Route path={"/admin"} component = {Authentication}/>
                <Route path={"/course"} component = {Course}/>
                <Route path={"/chapter/:id"} component = {Chapter}/>
                <Route path={"/"} component = {HomePage}/>
            </Switch>
        </>

    );
}

export default App;