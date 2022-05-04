import React, { Component } from "react";

export default class TaskLevel extends Component {
  constructor(props) {
    super(props);
    this.state = "";
  }

  render() {
    const level = this.props.level;

    const subClass = " p-1 ps-3 pe-3 text-white border-radius rounded-2";
    let taskLevel = "bg-secondary" + subClass;
    if (level === 2) taskLevel = "bg-primary" + subClass;
    if (level === 3) taskLevel = "bg-danger" + subClass;

    let taskLevelName = "Low";
    if (level === 2) taskLevelName = "Medium";
    if (level === 3) taskLevelName = "High";

    return <div className={taskLevel}>{taskLevelName}</div>;
  }
}
