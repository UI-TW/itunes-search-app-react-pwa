import React, {Component} from 'react';
import SearchContainer from './SearchContainer';
import ListContainer from './ListContainer';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <SearchContainer />
        <ListContainer />
      </div>
    );
  }
}
export default Home;
