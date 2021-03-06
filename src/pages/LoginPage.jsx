import React, { Component } from "react";
import AuthController from "../controllers/auth";
import { Redirect } from "react-router-dom";

class Login extends Component {
  controller = new AuthController();

  state = {
    username: "",
    password: "",
    redirect: false
  };

  onSubmitForm = ev => {
    ev.preventDefault();
<<<<<<< Updated upstream
    this.controller
      .onLogin(this.state.username, this.state.password)
      .then(res => res.data)
      .then(res => {
        localStorage.setItem("jwt", res.jwt);
        this.setState({
          redirect: true
        });
      })
      .catch(error => {
        // TO DO: add error handling
        console.log(error);
      });
  };
  render() {
    return this.state.redirect ? (
      <Redirect to="/" />
    ) : (
=======
    this.controller.onLogin(this.state.username, this.state.password)
                  .then(res => res.data)
                  .then(res => {
                    localStorage.setItem("jwt", res.jwt)
                    this.setState({
                      rediredt:true
                    })
                  })
  }

  render() {

    const { redirect } = this.state
    
    if(redirect){
      return <Redirect to='/' />
    }

    return (
>>>>>>> Stashed changes
      <form onSubmit={this.onSubmitForm}>
        <div className="hold-transition login-page">
          <div className="login-box">
            <div className="login-logo">
              <a href="../../index2.html">
                <b>Guru</b>Ahli
              </a>
            </div>
            <div className="card">
              <div className="card-body login-card-body">
                <p className="login-box-msg">Sign in to start your session</p>
                <div className="input-group mb-3">
                  <input
                    onChange={({ target }) =>
                      this.setState({ username: target.value })
                    }
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    onChange={({ target }) =>
                      this.setState({ password: target.value })
                    }
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">Remember Me</label>
                    </div>
                  </div>
                  <div className="col-4">
                    <input
                      type="submit"
                      value="Submit"
                      className="btn btn-block btn-primary"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Login;
