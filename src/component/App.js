import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Register from './client/Register.jsx';

import Home from './client/page/Home.jsx'

import DetailTheme from "./client/page/DetailTheme.jsx"
import Chat from './client/page/Chat/Chat.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="AppComponent">
        <BrowserRouter>
          <Route exact path="/" render={() => <Home />} />
          <Switch>
            <Route exact path='/chat' render={({ match }) => <Chat match={match}/>}/>
            <Route path='/chat/:id' render={({ match }) => <Chat match={match}/>}/>
          </Switch>
          <Route path="/theme-detail" render={() => <DetailTheme />} />
          <Route path="/register" render={() => <Register />} />

        </BrowserRouter>
      </div>
    );
  }
}
export default App;