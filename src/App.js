import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {}
    }
  }

  getLocation = async () => {

    const apiUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.searchQuery}&format=json`;

    const response = await axios.get(apiUrl);

    const location = response.data[0];

    this.setState({
      location,
      // same as location:location
    });

  }

  render() {
    const img = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_KEY}&center=${this.state.location.lat},${this.state.location.lon}&format=jpg&zoom=9`;

    return (
      <>
        <h2> Enter your city to learn more</h2>
        <input onChange={(e) => this.setState({ searchQuery: e.target.value })} placeholder="search for a city"></input>

        <button onClick={this.getLocation}>Explore!</button>
        {this.state.location.place_id &&
          <>
            <h2>The city is: {this.state.location.display_name}</h2>

            <h3>The lattitude is: {this.state.location.lat}</h3>

            <h3>The longitude is: {this.state.location.lon}</h3>
            <img src={img} alt="location" id='map'/>
            
          </>

        }
      </>
    )
  }
}

export default App;

