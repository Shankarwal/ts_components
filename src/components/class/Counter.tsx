import { Component } from "react";

type CompProps = {
  message: string;
};

type CompState = {
  count: number;
};

export class Counter extends Component<CompProps, CompState> {
  state = {
    count: 0,
  };

  // named Fn wont work, arrow fn will because arrow fn is compiled in  constructor behind  the scene
  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>Increase</button>
      </div>
    );
  }
}
