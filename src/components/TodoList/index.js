import "./todo-list.css";

import React, { Component } from "react";
import TodoItem from "./TodoItem";

import { connect } from "react-redux";
import {  getAllTaskAsync } from "../../store/todoSlice";
import Loading from "../common/Loading";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      loading: this.props.todoList.loading,
    };
  }

  componentDidMount() {
    this.props.getAllTask();
    this.setState({ loading: this.props.todoList.loading });
  }

  
  render() {
    const todoList = this.props.todoList;

    return (
      <div className="todo-list">
        <div className="todo-list-name">List Tasks</div>
        <table>
          <tbody>
            <tr className="todo-item">
              <td className="todo-id">
                <strong>No.</strong>
              </td>
              <td className="todo-name">
                <strong>Task</strong>
              </td>
              <td className="todo-level text-center">
                <strong>Level</strong>
              </td>
              <td className="todo-action todo-action-name">
                <strong>Action</strong>
              </td>
            </tr>

            {todoList.loading ? (
              <tr>
                <td colSpan={4}>Loading data...</td>
              </tr>
            ) : todoList.todos?.length > 0 ? (
              todoList?.todos?.map((task, index) => (
                <TodoItem
                  key={index}
                  task={task}
                  index={index}
                  deleteTask={this.props.deleteTask}
                />
              ))
            ) : (
              <tr>
                <td colSpan={4}>No task, let's play!</td>
              </tr>
            )}
          </tbody>
        </table>
        {todoList.loading && <Loading />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllTask: () => dispatch(getAllTaskAsync()),
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
