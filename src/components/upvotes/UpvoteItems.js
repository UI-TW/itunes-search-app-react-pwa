import React, {Component} from 'react';
import './upvoteitem.css';

class UpvoteItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upvoteList: []
    };
  }

  componentDidMount() {
    this.props.upvoteAction();
  }

  componentWillReceiveProps(nextProps){
     this.setState((prevState, props) =>{ 
       return {'upvoteList': nextProps.listOfUpvotes}
     })
  }
  render() {
     let noOfUpvotes= this.state.upvoteList;
     return (
        <div className="upvoteContainer">
{noOfUpvotes.map(function(name, index){
        return (<div key={'upvote'+ index} className="upvoteItem">
          <div className="upvoteItem-info">
             <div className="upvoteItem-info__ranking">
               <i className="material-icons like-icon u-pointer">favorite</i>
              <div>{name.count}</div>
            </div>
            <h3 className="upvoteItem-info__title">{name.collectionName}</h3>
          </div>
          <div className="upvoteItem-image">
            <img src={name.artworkUrl100}/>
          </div>
        </div>)

        })}
        </div>
      );


  }
}
export default UpvoteItem;
