import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
/**
 * import define
 */

import Dropdown from "../general/dropdown.jsx";
class Register extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   count:  1
    // }
  }
  handleChangeState = event => {
    // this.setState({
    //   count: this.state.count + 1
    // })
    this.props.dispatch({ type: 'demo', payload: 'ahihi ddooff ngốc payload ' })
  }
  render() {
    
    

    return (
      <div className="animated fadeIn">
        <Dropdown button={'come me baby'} list={['html', 'php', 'nodejs']} />
         page register bình thường chưa thay đổi state
        <Dropdown button={'sờ chị đi cưng'} list={['ahihi', 'nà ní']} />
        hùng đẹp trai
        <button onClick={this.handleChangeState}>click me</button>

        <Link to='/'>trang chủ</Link>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    demo: state.demo
  }
}

export default connect(
  mapStateToProps
)(Register);