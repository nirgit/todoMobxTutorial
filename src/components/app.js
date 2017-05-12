import _ from 'lodash';
import React from 'react';

import Todo from '../todo';
import TodoList from './todoList/todoList';
import ProgressBar from './progressBar/progressBar';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: ['buy milk', 'buy flour',
                    'buy cheese', 'make pizza',
                    'eat', 'do dishes'].map(Todo)
        };
    }

    addTodoByKey(e) {
        if (e.keyCode === 13) { // Enter pressed
            const todoToAdd = e.target.value;
            this.addTodo(todoToAdd);
        }
    }

    addTodoByClick() {
        const todoToAdd = this.refs.todoInput.value;
        this.addTodo(todoToAdd);
    }

    addTodo(todoToAdd) {
        if (todoToAdd && todoToAdd.length > 2) {
            console.log('adding todo:', todoToAdd);
            this.refs.todoInput.value = '';
            const updatedTodoList = this.state.todos.concat(Todo(todoToAdd));
            this.setState({
                todos: updatedTodoList
            });
        }
    }

    toggleDone(todoId) {
      const todoIndex = _.findIndex(this.state.todos, {'id': todoId});
      this.state.todos[todoIndex].isDone = !this.state.todos[todoIndex].isDone;
      this.setState({
        todos: this.state.todos
      });
    }

    clearAllDones() {
        const unFinishedTodos = this.state.todos.filter(t => !t.isDone);
        this.setState({
            todos: unFinishedTodos
        });
    }

    render() {
        console.log('rendering App');
        console.log(this.state);

        const percentage = this.state.todos.filter(t => t.isDone).length / (this.state.todos.length || 1);

        return <div className='app'>
            <h1 className='title'>My (Mobx) Todo App</h1>

            <ProgressBar percentage={percentage} />

            <div>
                <span>Add</span>
                <input ref='todoInput' type='text' onKeyUp={(e) => this.addTodoByKey(e)} />
                <button onClick={(e) => this.addTodoByClick(e)}>Add</button>
            </div>

            <TodoList todos={this.state.todos} toggleDone={this.toggleDone.bind(this)} />

            <div>
                <a href="#" onClick={this.clearAllDones.bind(this)}>Clear all "Done"s</a>
            </div>
        </div>;
    }
}

export default App;
