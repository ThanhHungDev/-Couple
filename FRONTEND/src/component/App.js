import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import Register from './client/Register.jsx';
import Login from "./client/page/Login.jsx"
import Home from './client/page/Home.jsx'

import DetailTheme from "./client/page/DetailTheme.jsx"
import ListTheme from "./client/page/Theme/ListTheme.jsx"
import Chat from './client/page/Chat/Chat.jsx';


/// soccket 
import socketIOClient from "socket.io-client";
import CONFIG from "../config";
import { setterSocket } from "../action"
import { socketListenner } from "../action/socket"
import { socketInitialConnect } from "../library/helper.js"

class App extends Component {
  constructor(props) {
    super(props);
    var instanceApp = this
    var socket = socketInitialConnect(socketIOClient, instanceApp )
  }
  render() {
    console.log("draw app")
    return (
      <div className="AppComponent" id="Application">
        <BrowserRouter>
          <Route exact path="/" render={() => <Home />} />
          <Switch>
            <Route exact path='/chat' render={({ match }) => <Chat match={match}/>}/>
            <Route path='/chat/:id' render={({ match }) => <Chat match={match}/>}/>
          </Switch>
          <Switch>
            <Route exact path='/theme' render={({ match }) => <ListTheme match={match}/>}/>
            <Route path='/theme/:id' render={({ match }) => <DetailTheme match={match}/>}/>
          </Switch>
          <Route path="/register" render={() => <Register />} />
          <Route path="/login" render={() => <Login />} />

        </BrowserRouter>
      </div>
    );
  }
}
var mapStateToProps = state => {
  var { client, authentication } = state
  return { client, authentication }
}
export default connect (mapStateToProps)(App);