import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { connect } from 'react-redux'
import Register from './client/Register.jsx'
import Login from "./client/page/Login.jsx"
import Home from './client/page/Home.jsx'
import Contact from "./client/page/Contact.jsx"
import DetailTheme from "./client/page/DetailTheme.jsx"
import ListTheme from "./client/page/Theme/ListTheme.jsx"
import Chat from './client/page/Chat/Chat.jsx';
import ModalLogoutSuccess from "./client/_layout/partial/General/ModalLogoutSuccess.jsx"


/// soccket 
import socketIOClient from "socket.io-client";
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
          <Route path="/contact" render={() => <Contact />} />

        </BrowserRouter>
        <ModalLogoutSuccess />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    client  : state.client
  }
}
export default connect (mapStateToProps)(App);