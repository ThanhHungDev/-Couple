import React, { Component } from "react"
import { connect } from "react-redux"
import { listenLoginEvent  } from "../../library/helper.js"

class ComponentPermitionDenied extends Component {

    componentDidMount(){
        /// call action not 
        var { user } = this.props
        if( !user || !user._id ){
            listenLoginEvent()
        }
    }

    render (){
        var { ComponentHtml, match } = this.props
        return <ComponentHtml {...this.props} match={match} />
    }
}


let mapStateToProps = (state) => {
    return {
      user    : state.users
    }
}
export default connect(mapStateToProps)(ComponentPermitionDenied)
  