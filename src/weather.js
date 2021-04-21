import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



export default class Weather extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        {this.props.weatherList.map((n, index) => {
          return <div key={index}>
            <h3>The date: {n.time}</h3>
            <h3>Weather Condition: {n.forecast}</h3>
          </div>
        })
        }
      </>
    );
  }
}
