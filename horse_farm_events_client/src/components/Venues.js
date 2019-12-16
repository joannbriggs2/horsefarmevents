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
    this.handleAdd = this.handleAdd.bind(this);
    this.getEvent = this.getEvent.bind(this);
    this.getVenues = this.getVenues.bind(this);

    // this.handleShow = this.handleShow.bind(this);
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

  async handleAdd(event, formInputs) {
    event.preventDefault();
    await axios.post("/venues", formInputs);
    this.getVenues();
  }

  async getEvent(venue) {
    this.setState({ venue: venue });
  }

  //   async handleShowButton(id) {
  //     try {
  //       const url = `http://localhost:3000/venues/${id}`;
  //       // console.log("In delete url", url);
  //       await axios.put(url);
  //     } catch (err) {
  //       console.log("Show Error: ", err);
  //     }
  //     this.getModel();
  //   }

  render() {
    // const showEditForm = this.state.editButton ? (
    //   <Handleevent handleSubmit={this.handleAdd} />
    // ) : (
    //   console.log("on mouse over", this.state.venueToShow)
    //   //   (<Events thisVenue={this.state.venueToShow} />))
    // );

    return (
      <>
        <h1>Venues</h1>
        <table>
          <tbody>
            {this.state.venues.map(venue => {
              return (
                <tr onMouseOver={() => this.getEvent(venue)} key={venue.id}>
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
                /* <Events venue={venue} /> */
                /* <Events thisVenue={venue} /> */
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
