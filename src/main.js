'use strict';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';
class Main extends Component {

  render() {
    return (
      <React.Fragment>
        <App/>
      </React.Fragment>
    )
  }
}
ReactDOM.render(<Main/>, document.getElementById('root'));