import React from "react";
import Greeting from "./components/GreetingFunctional";

class App extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      enteredName: "",
    };
    this.onChangeName = this.onChangeName.bind(this);
  }

  state: { enteredName: string };
  onChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      enteredName: e.target.value,
      message: `Hello from, ${e.target.value}`,
    });
  }

  render() {
    console.log("rendering App");
    return (
      <div className="App">
        <header className="App-header"></header>
        <input value={this.state.enteredName} onChange={this.onChangeName} />
        <Greeting message={this.state.enteredName} />
      </div>
    );
  }
}

export default App;
