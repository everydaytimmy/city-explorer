import React from 'react';
import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { CardDeck } from 'react-bootstrap';



export default class Movie extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <CardDeck>
          {this.props.movieList.map((n, index) => {
            return (
            <Card style={{minWidth: '18rem'}} key={index}>
              <Card.Title>Movie: {n.title}</Card.Title>
              <Card.Text>Overview: {n.overview}</Card.Text>
              <Card.Text>Popularity: {n.popularity}</Card.Text>
            </Card>
            )
          })
          }
        </CardDeck>

      </>
    );
  }
}