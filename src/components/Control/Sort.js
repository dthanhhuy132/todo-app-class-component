import React, { Component } from "react";

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = "";
  }
  render() {
    return (
      <div className="input-group control-sort">
        <select className="form-select" id="inputGroupSelect01">
          <option defaultValue={1}>Low</option>
          <option value={2}>Medium</option>
          <option value={3}>High</option>
        </select>
      </div>
    );
  }
}

export default Sort;
