import React, {Component} from 'react';
import './header.css';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    return (
      <div id="header"><div className="navbar-fixed">
        <nav className="nav dark-primary-color">
          <Link to="/#UpvoteItem"><h1 id="appHeader" role="button" className="title u-pointer">Music finder</h1></Link>
          <div className="spacer"></div>
          <ul className="menu">
            <li className="menu__item">
              <a href="javascript:void(0);" className="menu__link user_info">
                <i className="material-icons">person</i>
                Guest
              </a>
            </li>
            <li className="menu__item ">
              <a href="javascript:void(0);" id="loginLink" className="menu__link">
                <i className="material-icons">input</i>
                <span className="icon-text">Login/Signup</span>
              </a>
            </li>
            <li className="menu__item active">
              <a href="javascript:void(0);" id="searchLink" className="menu__link">
                <i className="material-icons">search</i>
                <span className="icon-text">Search</span>
              </a>
            </li>
            <li className="menu__item ">
              <a href="javascript:void(0);" id="favLink" className="menu__link">
                <i className="material-icons">favorite</i>
                <span className="icon-text">Upvotes</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      </div>
    );
  }
}
export default Card;
