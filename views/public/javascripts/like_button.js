'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  render() {
    return e(
      'button',
      { },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);