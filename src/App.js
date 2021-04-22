import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './App.css';
import Weather from './weather.js';
import Movie from './movie.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      error: {},
      isError: false,
      location: {},
      weather: [],
      movie: [],
    }
  }

  getInformation = async () => {
    try {
      // LOCATION INFORMATION
      const locationURL = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;

      const response = await axios.get(locationURL);

      const location = response.data[0];
      this.setState({
        location: location,
        isError: false,
      })

      // WEATHER INFORMATION
      const weatherURL = `http://localhost:3001/weather?lat=${response.data[0].lat}&lon=${response.data[0].lon}`;

      const weatherResponse = await axios.get(weatherURL);
      this.setState({
        weather: weatherResponse.data,
      })

      // MOVIE INFORMATION
      const movieURL = `http://localhost3001/movie?city=${response.city}`

      const movieResponse = await axios.get(movieURL);

      this.setState({
        movie: movieResponse.city,
      })


    } catch (error) {
      this.setState({
        error,
        isError: true,
        location: "",
      });
    }
  }


  render() {
    const img = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.location.lat},${this.state.location.lon}&format=jpg&zoom=12`;

    return (
      <>
        <Navbar className="bg-light justify-content-between">
          <h2> Enter your city to learn more</h2>
          <input onChange={(e) => this.setState({ searchQuery: e.target.value })} placeholder="search for a city"></input>
          <Button onClick={this.getInformation}>Explore!</Button>
        </Navbar>

        {this.state.isError &&
          <h1> ERROR! {this.state.error.message} </h1>
        }

        {this.state.location.place_id &&
          <>
            <h2>The city is: {this.state.location.display_name}</h2>
            <h3>The lattitude is: {this.state.location.lat}</h3>
            <h3>The longitude is: {this.state.location.lon}</h3>
            <Weather
              weatherList={this.state.weather} />
            <Movie
              movieList={this.state.movie} />

            <img src={img} alt="location" id='map' />

          </>

        }
      </>
    )
  }
}

export default App;

