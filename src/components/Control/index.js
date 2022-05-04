import "./control.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewTaskAsync } from "../../store/todoSlice";
import LoadingButton from "../common/LoadingButton";

class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: "",
      taskLevel: 1,
      clearInput: false,
      loadingButton: this.props.loaddingButton,
    };

    this.handleInputTaskName = this.handleInputTaskName.bind(this);
    this.handleChangeLevel = this.handleChangeLevel.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleResetState = this.handleResetState.bind(this);
  }

  handleInputTaskName(e) {
    this.setState({ taskName: e.target.value });

    if (e.target.value !== "") {
      this.setState({ clearInput: true });
    } else {
      this.setState({ clearInput: false });
    }
  }

  handleChangeLevel(e) {
    this.setState({ taskLevel: e.target.value });
  }

  handleAddTask() {
    if (this.state.taskName === "") {
      window.alert("Please enter your task name");
      return;
    }

    const newTask = {
      name: this.state.taskName,
      level: Number.parseInt(this.state.taskLevel),
    };

    this.props.addNewTask(newTask);
    setTimeout(() => {
      this.handleResetState();
    }, 700);
  }

  handleResetState() {
    this.setState({
      taskName: "",
      taskLevel: 1,
      clearInput: false,
    });
  }

  render() {
    return (
      <div className="control">
        <div className="input-group input-task">
          <input
            type="text"
            className="form-control control-input-task"
            placeholder="Enter your task"
            value={this.state.taskName}
            onChange={this.handleInputTaskName}
          />

          <span className="task-label task-name">Task name</span>

          {this.state.clearInput ? (
            <i
              className="fa-solid fa-xmark input-task-close-icon"
              onClick={this.handleResetState}
            ></i>
          ) : (
            ""
          )}
        </div>

        <div className="input-group control-sort">
          <span className="task-label task-label-level task-level">
            Task level
          </span>

          <select
            className="form-select"
            value={this.state.taskLevel}
            onChange={this.handleChangeLevel}
          >
            <option value={1}>Low</option>
            <option value={2}>Medium</option>
            <option value={3}>High</option>
          </select>
        </div>
        <button
          className={`btn btn-primary dth-btn ${
            this.props.loadingButton ? "disabled" : ""
          }`}
          onClick={this.handleAddTask}
        >
          {this.props.loadingButton ? <LoadingButton /> : "Add Task"}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loadingButton: state.todos.loadingButton,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNewTask: (newTask) => {
      dispatch(addNewTaskAsync(newTask));
      return 20;
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Control);
