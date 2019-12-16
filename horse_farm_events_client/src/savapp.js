import React, { Component } from "react";
import "./App.css";
import axios from "axios";
// import Venue from "./components/Venue.js";
import Events from "./components/Events.js";
import Handleevent from "./components/Handleevent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: []
    };
    // this.handleAdd = this.handleAdd.bind(this);
    this.getVenues = this.getVenues.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    this.getVenues();
  }
  async getVenues() {
    try {
      const request = await axios.get("/venues");
      const venuesData = request.data;

      this.setState({
        venues: venuesData,
        apiIsLoaded: true
      });
    } catch (err) {
      console.log("GET err: ", err);
    }
  }

  async handleAdd(event, formInputs) {
    event.preventDefault();
    await axios.post("/venues", formInputs);
    this.getUsers();
  }

  render() {
    return (
      <>
        <h1>Upcoming Events</h1>
        <Handleevent handleSubmit={this.handleAdd} />
        {this.state.venues.map(venue => {
          return (
            <div key={venue.id}>
              <h3>{venue.name} </h3>
              <p>{venue.address} </p>
              <p>{venue.contact} </p>
              <p>{venue.email} </p>
              <p>{venue.phone} </p>
              <a href={venue.website} target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
              {/* <Events venue={venue} /> */}
              <Events thisVenue={venue} />
            </div>
          );
        })}
      </>
    );
  }
}
export default App;
