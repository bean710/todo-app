import React from 'react';
import ReactDOM from 'react-dom';

const HelloComponent = () => {
  return <h2>Hello, world!</h2>;
}

interface ListItemProp {
  name: string;
}

const ListItem = (props: ListItemProp) => {
  return <li>{props.name}</li>;
}

interface ListProp {
  todos: string[];
}

const TodoList = (props: ListProp) => {
  const todoNode = props.todos.map((todo) => {
    return (<ListItem name={todo} key={todo} />);
  });

  return (<ul>{todoNode}</ul>);
}

ReactDOM.render(
  <React.StrictMode>
    <HelloComponent />
    <TodoList todos={["a", "b", "c", "d"]} />
  </React.StrictMode>,
  document.getElementById('root')
);