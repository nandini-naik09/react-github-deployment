import { Component } from "react";

class LifeCycle extends Component {
  constructor(props) {
    console.log("Constructor invoked.");
    super(props);

    this.state = {
      count: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount()
  {
console.log("ComponentWillMount Invoked.");
  }

  componentDidMount()
  {
    console.log("componentDidMount Invoked.");
  }

  shouldComponentUpdate()
  {
    console.log("shouldComponentUpdate Invoked");
    return true;
  }

  componentDidUpdate()
  {
    console.log("componentDidUpdate Invoked");
  }

  componentWillUnmount()
  {
    console.log("componentWillUnmount Invoked");
  }

  handleClick() {
    console.log("Custom event Invoked.");
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div>
        <p> Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Keep Adding</button>
      </div>
    );
  }
}

export default LifeCycle;
