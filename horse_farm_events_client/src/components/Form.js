import React from "react";
import Input from "../components/Input";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventtype: "",
      date: "",
      time: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log("component did mount", this.props);
    if (this.props.venues) {
      this.setState({
        eventtype: this.props.venue.events.eventtype || "",
        date: this.props.thisVenue.events.date || "",
        time: this.props.thisVenue.events.time || "",
        id: this.props.thisVenue.events.id || ""
      });
    }
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(event, {
      eventtype: this.state.eventtype,
      date: this.state.date,
      time: this.state.time
    });
    console.log(this.state);
    this.setState({
      eventtype: "",
      date: "",
      time: ""
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          handleChange={this.handleChange}
          name={"eventtype"}
          placeholder={"eventtype"}
          type={"text"}
          value={this.state.eventtype}
          id={"eventtype"}
        />
        <Input
          handleChange={this.handleChange}
          name={"date"}
          placeholder={"date"}
          type={"text"}
          value={this.state.date}
          id={"date"}
        />
        <Input
          handleChange={this.handleChange}
          name={"time"}
          placeholder={"time"}
          type={"text"}
          value={this.state.time}
          id={"time"}
        />
        <input
          type="submit"
          value={this.props.user ? "update this event" : "add an event"}
        />
      </form>
    );
  }
}

export default Form;
