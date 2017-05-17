import './scss/app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { observable } from 'mobx';

import Todo from './todo';
import App from './components/app';

// YOU CAN PUSH ITEMS INTO THE APPLICATION MODEL TO SEE THE UI REACTING - window.applicationModel.todos.push({isDone: false, text: 'test', id: Math.random()})
const applicationModel = window.applicationModel = {
    @observable todos: ['buy milk', 'buy flour', 'buy cheese', 'make pizza', 'eat', 'do dishes'].map(Todo)
};

ReactDOM.render(
  <App todos={applicationModel.todos} />,
  document.getElementById('app')
);
