'use strict';

const e = React.createElement;

class Pin extends React.Component {
  render() {
    return e(
      'button',
      { },
      'hello'
    );
  }
}

const domContainer = document.querySelector('#pinny');
ReactDOM.render(e(Pin), domContainer);