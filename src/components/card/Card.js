import React, {Component} from 'react';
import './card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.likeClickHandler = this.likeClickHandler.bind(this);
  }

  likeClickHandler(e){
    if(this.refs.likeIcon.classList.contains('active-icon')){
      return true;
    } else {
    this.props.addUpvote(this.props.cardDetails);
    this.refs.likeIcon.classList.add('active-icon');
    return true;
    }
  }

  render() {
    var loggedIn = this.props.loginProp;
    var loginButton;
    if (loggedIn) {
      loginButton = <i ref="likeIcon" className="material-icons like-icon u-pointer"
          onClick={ this.likeClickHandler }>
          thumb_up
          <input type="checkbox" />
      </i>;
    } else {
      loginButton = <span></span>;
    }
    return (
      <div className="card-wrapper">
        <div className="card u-flex">
            <div className="card-image waves-effect waves-block waves-light">
                <img alt="img" className="activator" src={this.props.cardDetails.artworkUrl100} />
            </div>
            <div className="card-content u-flex">
                <div className="card-header u-flex u-pointer">
                    <span className="card-title grey-text text-darken-4 activator">{this.props.cardDetails.collectionName}</span>
                    <i className="material-icons right activator">more_vert</i>
                </div>
                <div className="card-actions u-flex">
                {loginButton}

                    <a target="_blank" href="https://itunes.apple.com/us/album/ch-check-it-out/724767716?i=724767861&amp;uo=4">
                        More
                    </a>
                </div>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{this.props.cardDetails.trackName}</span>
                <span className="card-title u-flex grey-text text-darken-4">{this.props.cardDetails.artistName}
                <i className="material-icons right">close</i></span>
            </div>
        </div>
    </div>
    );
  }
}
export default Card;
