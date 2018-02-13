import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory } from 'react-router-dom';
import Loadable from 'react-loadable';
import Header from './components/header/Header';

const Loading = () => <div>Loading...</div>;

const HomeComp = Loadable({
  loader: () => import('./containers/Home'),
  loading: Loading,
});

const LoginComp = Loadable({
  loader: () => import('./containers/LoginContainer'),
  loading: Loading
});


const UpvoteComp = Loadable({
  loader: () => import('./containers/UpvotesContainer'),
  loading: Loading
});

const App = () => (
  <Router history={browserHistory}>
    <div>
    <div id="header"><div className="navbar-fixed">
      <nav className="nav dark-primary-color">
        <Link to="/"><h1 id="appHeader" role="button" className="title u-pointer">Music finder</h1></Link>
        <div className="spacer"></div>
        <ul className="menu">
          <li className="menu__item">
            <span href="javascript:void(0);" className="menu__link user_info">
              <i className="material-icons">person</i>
              Guest
            </span>
          </li>
          <li className="menu__item ">
            <Link to="/login" id="loginLink" className="menu__link">
              <i className="material-icons">input</i>
              <span className="icon-text">Login/Signup</span>
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
      <Route exact path="/" component={ HomeComp }/>
      <Route exact path="/login" component={ LoginComp }/>
      <Route exact path="/Upvotes" component={ UpvoteComp }/>
    </div>
  </Router>
);

export default App;
