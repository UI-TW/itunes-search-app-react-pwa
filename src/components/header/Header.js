import React, {Component} from 'react';
import './header.css';
import { Link } from 'react-router-dom';


class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    let sessionLoginStatus = sessionStorage.getItem('login');
  }

  render() {
    return (
      <div id="header">
      <div className="navbar-fixed">
        <nav className="nav dark-primary-color">
          <Link to="/"><h1 id="appHeader" role="button" className="title u-pointer">Music finder</h1></Link>
          <div className="spacer"></div>
          <ul className="menu">
            <li className="menu__item">
              <span href="javascript:void(0);" className="menu__link user_info">
                <i className="material-icons">person</i>
                { this.props.LogedInUser }
              </span>
            </li>
            <li className="menu__item ">
              <Link to="/login" id="loginLink" className="menu__link">
                <i className="material-icons">input</i>
                <span className="icon-text">
                {
                  (this.props.LoginStatus)
                  ? <span> Logout </span>
                  : <span> Login/Signup </span>
                }

                </span>
              </Link>
            </li>
            <li className="menu__item active">
              <Link to="/" id="searchLink" className="menu__link">
                <i className="material-icons">search</i>
                <span className="icon-text">Search</span>
              </Link>
            </li>
            <li className="menu__item ">
              <Link to="/Upvotes" className="menu__link">
                <i className="material-icons">favorite</i>
                <span className="icon-text">Upvotes</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      </div>
    );
  }
}

export default Header;
