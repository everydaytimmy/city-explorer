import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



export default class Weather extends React.Component {
  render() {
    return (
      <>
        <h3>The date: {this.props.date}</h3>
        <h3>Weather Condition: {this.props.description}</h3>
      </>
    );
  }
}
