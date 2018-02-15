import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, browserHistory } from 'react-router-dom';
import Loadable from 'react-loadable';
import HeaderContainer from './containers/HeaderContainer';

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
<div>
  <Router history={browserHistory}>
  <div>
    <HeaderContainer />
      <Route exact path="/" component={ HomeComp }/>
      <Route exact path="/login" component={ LoginComp }/>
      <Route exact path="/Upvotes" component={ UpvoteComp }/>
      </div>
  </Router>
  </div>
);

export default App;
