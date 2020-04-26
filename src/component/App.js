import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Register from './client/Register.jsx';

import Home from './client/page/Home.jsx'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="AppComponent">
        <BrowserRouter>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/play-now" render={() => <p>trang play now</p>} />
          <Route path="/friend" render={() => <p>trang friend</p>} />
          <Route path="/register" render={() => <Register />} />

        </BrowserRouter>
      </div>
    );
  }
}
export default App;