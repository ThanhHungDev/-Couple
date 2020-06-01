import React, { Component } from 'react'

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = { hung: " đẹp trai " };

  }
  removeOpenDropdown = event => {
    var lstDropdown = document.getElementsByClassName('dropdown-toggle');
    for (let index = 0; index < lstDropdown.length; index++) {
      const element = lstDropdown[index];
      element.classList.remove('open');
      if (element.classList.contains("open-sign")) {
        element.classList.remove('open-sign');
        element.classList.add('open');
      }

    }
  };
  handleClick = (e) => {
    if (e.target.classList.contains("open")) {
      e.target.classList.remove('open');
    } else {
      e.target.classList.add('open-sign');
    }
  }

  componentDidMount() {
    document.onclick = this.removeOpenDropdown;
  }

  render() {
    
    return (
      <div className="dropdown" >
        <button className="btn btn-primary dropdown-toggle" onClick={this.handleClick}>
          {this.props.button}
        </button>
        <ul className="animated fadeIn faster">
          {this.props.list.map((item, index) => <li key={item + index}> <a onClick={e => e.preventDefault()}>{item}</a> </li>)}
        </ul>
      </div>
    )
  }
}

export default Dropdown;