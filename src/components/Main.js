import React, { Component } from "react";
import logo from "./logo.png";
class Main extends Component {
  render() {
    return (
      <div className="background">
        <div className="main">
          <img src={logo} alt="mainLogo" />
          <a hre="#" className="mainTitle">
            {this.props.title}
          </a>
        </div>
        <div className="mainLogin">
          <form name="login" action="">
            <diiv className="mainId">
              <input type="text" name="mainId" placeholder="ID" required />
            </diiv>
            <div className="mainPassword">
              <input
                type="password"
                name="mainPassword"
                placeholder="Password"
                required
              />
            </div>
            <div className="mainLoginBtn">
              <input type="submit" value="Login" />
            </div>
          </form>
          <div className="mainForgot">
            <a href="#" className="mainForgotBtn">
              {this.props.forgotBtn}
            </a>
          </div>
          <div className="mainSignUp">
            <a href="#" className="mainSignUpBtn">
              {this.props.mainSignUpBtn}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
