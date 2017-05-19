import _ from 'lodash';
import React from 'react';
// GET THE OBSERVER FOR REACT COMPONENTS
import { observer } from 'mobx-react';

import Todo from '../todo';
import TodoList from './todoList/todoList';
import ProgressBar from './progressBar/progressBar';

@observer
class App extends React.Component {

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
            // DIRECT ACCESS TO THE "TODOS" ARRAY - NO setState(..) NEEDED
            this.props.todos.push(Todo(todoToAdd));
        }
    }

    toggleDone = (todoId) => {
      const todoIndex = _.findIndex(this.props.todos, {'id': todoId});
      // DIRECT ACCESS TO TODOS OBJECTS IN ARRAY
      this.props.todos[todoIndex].isDone = !this.props.todos[todoIndex].isDone;
    };

    clearAllDones = () => {
        const unFinishedTodos = this.props.todos.filter(t => !t.isDone);
        // WE CAN'T REPLACE THE ENTIRE TODOS WITH A NEW REFERENCE, BUT WE CAN EMPTY IT AND PUSH ALL THE REST
        this.props.todos.clear();
        this.props.todos.push(...unFinishedTodos);
    };

    render() {
        console.log('rendering App');
        // console.log(this.state); # null

        const percentage = this.props.todos.filter(t => t.isDone).length / (this.props.todos.length || 1);

        return <div className='app'>
            <h1 className='title'>My (Mobx) Todo App</h1>

            <ProgressBar percentage={percentage} />

            <div>
                <span>Add</span>
                <input ref='todoInput' type='text' onKeyUp={(e) => this.addTodoByKey(e)} />
                <button onClick={(e) => this.addTodoByClick(e)}>Add</button>
            </div>

            <TodoList todos={this.props.todos} toggleDone={this.toggleDone} />

            <div>
                <a href="#" onClick={this.clearAllDones}>Clear all "Done"s</a>
            </div>
        </div>;
    }
}

export default App;
