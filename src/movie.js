import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



export default class Movie extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        {this.props.movieList.map((n, index) => {
          return <div key={index}>
            <h3>Movie: {n.title}</h3>
          </div>
        })
        }
      </>
    );
  }
}