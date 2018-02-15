import React, {Component} from 'react';
import Header from '../components/header/Header';
import { connect } from 'react-redux';

class HeaderContainer extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <Header LoginStatus={this.props.isAuthenticated} LogedInUser={this.props.user}/>
    );
  }
}

const mapStateToProps = (state,props) => {
  return {
    isAuthenticated: state.LoginReducer.authenticated,
    user: state.LoginReducer.username
    };
};


export default connect(mapStateToProps)(HeaderContainer);
