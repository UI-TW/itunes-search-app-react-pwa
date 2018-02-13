import React, {Component} from 'react';
import Search from '../components/search/Search';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { getAlbumList } from '../actions/SearchAction';
import * as searchActionCreator from '../actions/SearchAction';

class SearchContainer extends Component {

  render() {
    return (
      <div>
        <Search  searchAction={ this.props.getAlbumList } />
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return state;
}

// function mapDispatchToProps(dispatch){
//   return {
//     getAlbumListAction: () => dispatch(getAlbumList())
//   };
// }

//***using just dispatch from mapDispatchToProps
//import { getAlbumList } from '../actions/SearchAction';
//function mapDispatchToProps(dispatch){  return {getAlbumListAction: () => dispatch(getAlbumList())};}
// *** using bindActionCreators
// import * as searchAlbums from '../actions/SearchAction';
// <Search  searchAction={ this.props.action.getAlbumList } />
//function mapDispatchToProps(dispatch){  return {action: bindActionCreators(searchAlbums,dispatch)}}

export default connect(mapStateToProps, searchActionCreator)(SearchContainer);
