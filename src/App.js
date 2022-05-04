import "./app.css";
import { Component } from "react";

import Title from "./components/Title";
import Control from "./components/Control";
import TodoList from "./components/TodoList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app">
        <Title />

        <div className="container">
          <div className="todo-wrapper">
            <Control />
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}
