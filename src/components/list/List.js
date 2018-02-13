import React, {Component} from 'react';
import Card from '../card/Card';
import './list.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardList: []
    };
  }
  componentWillReceiveProps(nextProps){
     this.setState((prevState, props) =>{
       return {'cardList': nextProps.listOfAlbums}
     })
  }
  render() {
    const noOfCards= this.state.cardList;
    return (
      <div className="list-wrapper">
      {noOfCards.map((name, index) => {
                    return <Card key={'card'+ index}
                            addUpvote={this.props.upvoteActionAdd }
                            cardDetails={name}
                            loginProp ={ this.props.loginStatus }
                            />;
                  })}
      </div>
    );
  }
}
export default List;
//loginState={ this.prop.loginStatus
