import "./loading.css";

import React, { Component } from "react";
import LoadingIcon from "./LoadingIcon";

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = "";
  }

  render() {
    return (
      <div className="loading">
        <LoadingIcon />
      </div>
    );
  }
}
