import React, {Component} from 'react';
import Card from '../card/Card';
import './list.css';

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <div className="spinnerDiv">
        {this.props.loadingStatus?'Loading....':''}
      </div>
      <div className="list-wrapper">
      { this.props.listOfAlbums.map((name, index) => {
                    return <Card key={'card'+ index}
                            addUpvote={this.props.upvoteActionAdd }
                            cardDetails={name}
                            loginProp ={ this.props.loginStatus }
                            />;
                  })}
      </div>
      </div>
    );
  }
}
export default List;
