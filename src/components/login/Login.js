import React, {Component} from 'react';
import './login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.loginHandler = this.loginHandler.bind(this);
    this.signupHandler = this.signupHandler.bind(this);
  }

  loginHandler(e) {
      let pwd = this.refs.password.value;console.log('pwd1', pwd);
      this.props.loginAction(this.refs.email.value, pwd);
  }

  signupHandler(e) {
      let pwd = this.refs.password.value;
      this.props.signupAction(this.refs.email.value, pwd);
  }

  render() {
    return (
      <div className="container login">
    <h5 className="login__title primary-text-color">Login / Signup</h5>
    <div className="z-depth-1 row form-container">
        <form className="col s12">
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <i className="material-icons prefix">email</i>
                        <input ref="email" id="email" type="email" className="validate" />
                        <label htmlFor="email" data-error="wrong" data-success="right">Email</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <i className="material-icons prefix">lock</i>
                        <input ref="password" id="password" type="password" className="validate" />
                        <label htmlFor="password" data-error="wrong" data-success="right">Password</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <a id="btn-signup" onClick={this.signupHandler} className="col s5 offset-s1 accent-color btn waves-effect waves-light">Signup
                    </a>
                    <a id="btn-login" onClick={this.loginHandler} className="col s5 offset-s1 accent-color btn waves-effect waves-light">Login
                    </a>
                </div>
            </div>
        </form>
    </div>
</div>
    );
  }
}
export default Login;
