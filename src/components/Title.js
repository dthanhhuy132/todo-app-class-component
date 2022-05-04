import React from "react";

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="text-center">
        <h1 style={{ color: "#fff" }}>TODO APP - REACTJS - CLASS COMPONENT</h1>
        <span>--- by Huy Doan ---</span>
      </div>
    );
  }
}

export default Title;
