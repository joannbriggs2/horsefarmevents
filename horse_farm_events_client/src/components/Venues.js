import React, { Component } from "react";
import Events from "../components/Events.js";
// import Handleevent from "../components/Handleevent.js";
import axios from "axios";

class Venues extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: [],
      editButton: false
    };
    // this.handleAdd = this.handleAdd.bind(this);
    this.getEvent = this.getEvent.bind(this);
    this.getVenues = this.getVenues.bind(this);
  }

  componentDidMount() {
    this.getVenues();
  }
  async getVenues() {
    const response = await axios("http://localhost:3000/venues");
    const data = response.data;
    this.setState({
      venues: data
    });
  }

  //   async handleAdd(event, formInputs) {
  //     event.preventDefault();
  //     await axios.post("/venues", formInputs);
  //     this.getVenues();
  //   }

  async getEvent(venue) {
    this.setState({ venue: venue });
  }

  render() {
    return (
      <>
        <h1>Venues</h1>
        <table>
          <tbody className="venues">
            {this.state.venues.map(venue => {
              return (
                <tr onClick={() => this.getEvent(venue)} key={venue.id}>
                  <td>{venue.name} </td>
                  <td>{venue.address} </td>
                  <td>{venue.contact} </td>
                  <td>{venue.email} </td>
                  <td>{venue.phone} </td>
                  <td>
                    <a
                      href={venue.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Website
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="col">
          {this.state.venue && <Events thisVenue={this.state.venue} />}
        </div>
      </>
    );
  }
}
export default Venues;
