import "./control.css";

import React, { PureComponent } from "react";

class Search extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="input-task">
        <input
          type="text"
          className="form-control control-input-task"
          placeholder="Enter your task"
        />
      </div>
    );
  }
}

export default Search;
