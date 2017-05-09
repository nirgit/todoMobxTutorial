import _ from 'lodash';
import React from 'react';

import Todo from '../todo';

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
        const progressStyle = {width: (200 * percentage) + 'px'};

        return <div className='app'>
            <h1 className='title'>My (Mobx) Todo App</h1>

            <div className="progress-bar">
                <div className='meter' style={progressStyle}></div>
                <div className='label'>{percentage === 1 ? 'You are done!' : 'Progress'}</div>
            </div>

            <div>
                <span>Add</span>
                <input ref='todoInput' type='text' onKeyUp={(e) => this.addTodoByKey(e)} />
                <button onClick={(e) => this.addTodoByClick(e)}>Add</button>
            </div>

            <div>
                <ul>
                    {this.state.todos.map(t => <li key={t.id}><input onClick={this.toggleDone.bind(this, t.id)} type="checkbox" checked={t.isDone} />{t.text}</li>)}
                </ul>
            </div>

            <div>
                <a href="#" onClick={this.clearAllDones.bind(this)}>Clear all "Done"s</a>
            </div>
        </div>;
    }
}

export default App;
