import React, {Component} from 'react';
import './card.css';

class Card extends Component {

  render() {
    var loggedIn = this.props.loginProp;
    var loginButton;
    if (loggedIn) {
      loginButton = <i className="material-icons like-icon u-pointer"
          onClick={ this.props.addUpvote.bind(this,this.props.cardDetails)}>
          thumb_up
          <input type="hidden" value="1055074478" />
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
