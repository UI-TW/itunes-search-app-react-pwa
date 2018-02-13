import React, {Component} from 'react';
import UpVoteItems from '../components/upvotes/UpvoteItems';
import { connect } from 'react-redux';
import * as upvotesActionCreator from '../actions/UpvotesAction';

class UpVotesContainer extends Component {

  render() {
    return (
      <div>
        <UpVoteItems  upvoteAction={ this.props.getUpvotesList } listOfUpvotes={ this.props.upvoteList }/>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
    upvoteList: state.UpvotesReducer.upvotelist
  }
}

export default connect(mapStateToProps, upvotesActionCreator)(UpVotesContainer);
