import React, {Component} from 'react';
import Login from '../components/login/Login';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as LoginActionCreator from '../actions/LoginAction';

class LoginContainer extends Component {

  render() {
    return (
      <div>
        <Login loginAction={ this.props.postLogin } signupAction= { this.props.postSignup } />
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return state;
}

export default connect(mapStateToProps, LoginActionCreator)(LoginContainer);
