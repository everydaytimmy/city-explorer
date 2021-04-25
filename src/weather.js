import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ListGroup from 'react-bootstrap/ListGroup'



export default class Weather extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        {this.props.weatherList.map((n, index) => {
          return <div key={index}>
            <ListGroup>
            <ListGroup.Item>Date: {n.time} || Conditions: {n.forecast}</ListGroup.Item>
            </ListGroup>
          </div>
        })
        }
      </>
    );
  }
}
