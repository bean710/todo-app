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

interface InputProp {
  add: (name: string) => any;
}

class TodoInput extends Component<InputProp, {}> {
  private input: any;

  render() {
    return (
      <div>
        <input type="text" ref={(node) => {
          this.input = node;
        }}></input>
        <input type="button" value="Add" onClick={() => {
          this.props.add(this.input.value);
          this.input.value = '';
        }}></input>
      </div>
    );
  }
}

interface TodoAppState {
  todos: string[];
}

class TodoApp extends Component<{}, TodoAppState> {
  constructor(props: any) {
    super(props);

    this.state = {todos: []};
  }

  addTodo(name: string) {
    this.setState({
      todos: this.state.todos.concat(name)
    });
  }

  render() {
    return (
      <div>
        <TodoInput add={this.addTodo.bind(this)} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <HelloComponent />
    <TodoApp />
  </React.StrictMode>,
  document.getElementById('root')
);