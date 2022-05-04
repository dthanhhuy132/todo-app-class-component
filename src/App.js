import "./app.css";
import { Component } from "react";

import Title from "./components/Title";
import Control from "./components/Control";
import TodoList from "./components/TodoList";

import Background from "./assets/img/bg.jpg";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="app">
        <Title />
        <img src={Background} alt="" className="app-bg" />

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
