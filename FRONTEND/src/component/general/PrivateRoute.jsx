import React, { Component } from "react"
import { Route, Redirect } from 'react-router-dom'
import ComponentPermitionDenied from "./ComponentPermitionDenied.jsx"

const PrivateRoute = ({ component: ComponentHtml , user, match, ...rest }) => (

    
    <Route {...rest} 
    render={({ match }) => (
        user ? <ComponentHtml {...props}  match={match} />
            : <ComponentPermitionDenied ComponentHtml={ ComponentHtml }  match={match} />
    )} />
);

export default PrivateRoute;


