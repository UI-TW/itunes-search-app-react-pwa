import React, {Component} from 'react';
import Dropdown from 'react-dropdown';
import './search.css';
import  { getAlbumList } from '../../actions/SearchAction';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.onDropDownSelect = this.onDropDownSelect.bind(this);
    this.state = {
      selected: 'All'
    };
  }

  onDropDownSelect (option) {
    this.setState({selected: option.label})
  }

  handleKeyUp(e) {
    if(e.keyCode === 13){
      let category = this.state.selected.toLowerCase();
      this.props.searchAction(e.target.value, category);
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
          onChange={this.onDropDownSelect}
          value={ this.state.selected }
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
