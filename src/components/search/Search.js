import React, {Component} from 'react';
import Dropdown from 'react-dropdown';
import './search.css';
import  { getAlbumList } from '../../actions/SearchAction';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.state = {
    };
  }

  handleKeyUp(e) {
    if(e.keyCode === 13){
      this.props.searchAction(e.target.value);
    }
  }

  render() {
    const options = [
      'All',
      'Audiobook',
      'eBook',
      'Movie',
      'Music',
      'Music Video',
      'Podcast',
      'TV Show',
      'Software'
      ];
    return (
      <div className="searchWrapper">
        <div className="searchDropdown">
        <Dropdown
          className="dropdown"
          options={options}
          onChange={this._onSelect}
          value={ options[0] }
          placeholder="Select an option"
        />
        </div>
        <input id="searchField" type="text"
          placeholder="Search"
          onKeyUp={this.handleKeyUp}
          className="search-input-text" />

      </div>
    );
  }
}

export default Search;
