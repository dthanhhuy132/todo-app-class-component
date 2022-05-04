import React, { Component } from "react";
import { connect } from "react-redux";
import {
  deleteTaskAsync,
  editTaskAsync,
  deleteTaskAction,
} from "../../store/todoSlice";
import BootstrapModal from "../common/BootrapModal";
import { LoadingCircle } from "../common/LoadingCircle";
import TaskLevel from "./TaskLevel";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditTask: false,
      taskEditName: this.props.task.name,
      taskEditLevel: this.props.task.level,
      loadingButton: this.props.loadingButton,
      isDetele: false,

      isShowModal: false,
    };

    this.handleEnableEditTask = this.handleEnableEditTask.bind(this);
    this.handleEnableEditTaskName = this.handleEnableEditTaskName.bind(this);
    this.handleEnableEditTaskLevel = this.handleEnableEditTaskLevel.bind(this);
    this.handleSaveEditTask = this.handleSaveEditTask.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleDeleteConfirm = this.handleDeleteConfirm.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleEnableEditTask() {
    this.setState({ isEditTask: !this.state.isEditTask });
  }

  handleEnableEditTaskName(e) {
    this.setState({
      taskEditName: e.target.value,
    });
  }

  handleEnableEditTaskLevel(e) {
    this.setState({ taskEditLevel: e.target.value });
  }

  handleSaveEditTask() {
    const taskEdit = {
      name: this.state.taskEditName,
      level: Number.parseInt(this.state.taskEditLevel),
    };

    const editData = {
      id: this.props.task.id,
      data: taskEdit,
    };

    this.props.editTask(editData);
    setTimeout(() => {
      this.handleEnableEditTask();
    }, 700);
  }

  handleDeleteTask() {
    this.setState({ isShowModal: true });
  }

  handleDeleteConfirm(task) {
    this.setState({ isShowModal: false });
    this.setState({ isDetele: true });
    this.props.deleteTask(task.id);
    setTimeout(() => {
      this.props.deleteTaskNoAsync(task);
      this.setState({ isDetele: false });
    }, 1000);
  }

  handleCloseModal() {
    this.setState({ isShowModal: false });
  }

  render() {
    const { task, index } = this.props;
    return (
      <>
        <tr className="todo-item">
          <td className="todo-id">{index + 1}</td>
          <td className="todo-name">
            {this.state.isEditTask ? (
              <div className="input-task">
                <input
                  type="text"
                  className="form-control control-input-task control-input-task-edit"
                  placeholder="Enter your task"
                  value={this.state.taskEditName}
                  onChange={this.handleEnableEditTaskName}
                />
              </div>
            ) : (
              task.name
            )}
          </td>

          <td className="todo-level text-center">
            {this.state.isEditTask ? (
              <div className="input-group control-sort ">
                <select
                  className="form-select control-input-task-edit-level"
                  value={Number.parseInt(this.state.taskEditLevel)}
                  onChange={this.handleEnableEditTaskLevel}
                >
                  <option value={1}>Low</option>
                  <option value={2}>Medium</option>
                  <option value={3}>High</option>
                </select>
              </div>
            ) : (
              <TaskLevel level={Number.parseInt(task.level)} />
            )}
          </td>

          <td className="todo-action">
            {!this.state.isEditTask ? (
              <div className="todo-action-options">
                <i
                  className="fa-solid fa-pen-to-square action-icon action-icon-edit"
                  title="Edit"
                  onClick={this.handleEnableEditTask}
                ></i>
                {this.state.isDetele ? (
                  <LoadingCircle />
                ) : (
                  <i
                    className="fa-solid fa-trash action-icon action-icon-delete"
                    title="Delete"
                    onClick={() => this.handleDeleteTask(task)}
                  ></i>
                )}
              </div>
            ) : (
              <div className="todo-action-options todo-edit">
                {this.props.loadingEdit ? (
                  <LoadingCircle />
                ) : (
                  <i
                    className="fa-solid fa-check action-icon action-icon-complete fw-bolder"
                    title="Save"
                    onClick={this.handleSaveEditTask}
                  ></i>
                )}

                <i
                  className="fa-solid fa-xmark action-icon action-icon-delete fw-bolder"
                  title="Cancel"
                  onClick={this.handleEnableEditTask}
                ></i>
              </div>
            )}
          </td>
        </tr>
        <BootstrapModal
          taskName={task.name}
          delFunc={() => this.handleDeleteConfirm(task)}
          isShowModal={this.state.isShowModal}
          handleCloseModal={this.handleCloseModal}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loadingButton: state.todos.loadingButton,
    loadingEdit: state.todos.loadingEdit,
    loadingDelete: state.todos.loadingDelete,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (id) => dispatch(deleteTaskAsync(id)),
    editTask: (editData) => dispatch(editTaskAsync(editData)),
    deleteTaskNoAsync: (deleteTodo) => dispatch(deleteTaskAction(deleteTodo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
