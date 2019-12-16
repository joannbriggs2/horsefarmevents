import React from "react";
import Form from "./Form.js";

function Handleevent(props) {
  console.log("props", props);
  return (
    <aside>
      <h1>Events</h1>
      <Form handleSubmit={props.handleSubmit} />
    </aside>
  );
}

export default Handleevent;
