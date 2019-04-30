/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './css/app.css';
import './css/bootstrap.css';
import './css/theme.css';
import imageTextBlock from './components/imageTextBlock';

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <imageTextBlock />
      </React.Fragment>
    );
  }
}
export default App;