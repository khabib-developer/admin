import React, {useEffect} from 'react';
import {BrowserRouter, Redirect, Route, Switch,} from "react-router-dom";
import {Login} from "@/views/authentication/login";
import {AdminLayout} from "@/views/admin";


const Pages = () => {


    return (
        <BrowserRouter>
            <Switch>
                <Route path="/auth/login" children={ <Login/> }/>
                <Route path="/admin" children={ <AdminLayout/> }/>
                <Route exact path="*">
                    <Redirect to={ "/admin/model" }/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Pages;