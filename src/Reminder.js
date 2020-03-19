import React, { Component } from "react";
import TodoList from "./Todo-App/TodoList";
 
class Reminder extends Component {
  render() {
    return (
      <div>
        <TodoList/>
      </div>
    );
  }
}
 
export default Reminder;