/* eslint-disable */
import React, { Component } from "react";
import Main from "./components/Main";
import "./App.css";

// useState사용법
// let [homeTitle, homeTitleChange] = useState("World Class", "")

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main
          title="World Class"
          forgotBtn="Forgot password?"
          mainSignUpBtn="Don't have an account? Sign up"
        ></Main>
      </div>
    );
  }
}

export default App;
