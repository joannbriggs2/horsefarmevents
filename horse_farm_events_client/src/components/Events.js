import React, { Component } from "react";
import Handleevent from "./Handleevent";
import axios from "axios";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  async handleAdd(event, formInputs) {
    event.preventDefault();
    console.log(this.state.formInputs);
    await axios.post(`/venues/${this.props.thisVenue.id}`, formInputs);
    // this.getEvents();
    // await axios.post(`/venues/${this.props.thisVenue.id}`, formInputs);
    // this.getUsers();
  }

  render() {
    <Handleevent handleSubmit={this.handleAdd} />;
    console.log("in events.js", this.props);

    return (
      <>
        <h1>Upcoming Events</h1>

        <table>
          <tbody className="events">
            {this.props.thisVenue.events.map(event => {
              return (
                <tr key={event.id}>
                  <td>{event.eventtype} </td>
                  <td>{event.date} </td>
                  <td>{event.time} </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}
export default Events;
