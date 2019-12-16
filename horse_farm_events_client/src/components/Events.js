import React, { Component } from "react";

class Events extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("in events.js", this.props);
    return (
      <>
        <h1>Upcoming Events</h1>

        <table>
          <tbody>
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
