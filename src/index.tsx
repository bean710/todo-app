import React, { Component } from 'react';
import ReactDOM from 'react-dom';

interface Todo {
  value: string;
  id: number;
}

const HelloComponent = () => {
  return <h2>Hello, world!</h2>;
}

interface ListItemProp {
  todo: Todo;
  remove: (id: number) => any;
}

class ListItem extends Component<ListItemProp, {}> {
  render() {
    return <li onClick={() => {
      console.log('Clicked');
      this.props.remove(this.props.todo.id);
    }}>{this.props.todo.value}</li>;
  }
}

interface ListProp {
  todos: Todo[];
  remove: (id: number) => any;
}

class TodoList extends Component<ListProp, {}> {
  render() {
    const todoNode = this.props.todos.map((todo) => {
      return (
      <ListItem
        todo={todo} 
        key={todo.id} 
        remove={this.props.remove}
       />);
    });
  
    return (<ul>{todoNode}</ul>); 
  }
}

interface InputProp {
  add: (name: string) => any;
  remove: (id: number) => any;
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
  todos: Todo[];
}

class TodoApp extends Component<{}, TodoAppState> {
  private inc: number = 0;

  constructor(props: any) {
    super(props);

    this.state = {todos: []};
  }

  addTodo(name: string) {
    this.setState({
      todos: this.state.todos.concat({
        value: name,
        id: this.inc++
      })
    });
  }

  removeTodo(id: number) {
    const filtered = this.state.todos.filter((todo: Todo) => {
      if (todo.id !== id) return todo;
      return false;
    });

    this.setState({
      todos: filtered
    });
  }

  render() {
    return (
      <div>
        <TodoInput add={this.addTodo.bind(this)} 
          remove={this.removeTodo.bind(this)} />
        <TodoList todos={this.state.todos} 
          remove={this.removeTodo.bind(this)}/>
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