import React, { Component } from 'react'
import Header from "../_layout/header/index.jsx"


class Home extends Component {
  constructor(props) {

    super(props);
  }
  
  render() {
    
    return (
      <div className="component-home">
        <Header />
        <div>home page</div>
      </div>
    )
  }
}

export default Home;