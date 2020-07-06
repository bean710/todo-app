import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const HelloComponent = () => {
  return <h2>Hello, world!</h2>;
}

interface ListItemProp {
  name: string;
}

class ListItem extends Component<ListItemProp, {}> {
  render() {
    return <li>{this.props.name}</li>;
  }
}

interface ListProp {
  todos: string[];
}

class TodoList extends Component<ListProp, {}> {
  render() {
    const todoNode = this.props.todos.map((todo) => {
      return (<ListItem name={todo} key={todo} />);
    });
  
    return (<ul>{todoNode}</ul>); 
  }
}

ReactDOM.render(
  <React.StrictMode>
    <HelloComponent />
    <TodoList todos={["a", "b", "c", "d", "e"]} />
  </React.StrictMode>,
  document.getElementById('root')
);