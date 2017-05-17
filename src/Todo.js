import { observable } from 'mobx';

let nextTodoId = 0;

function Todo(text) {
    nextTodoId++;
    return {
        @observable isDone: false,
        @observable text: text,
        id: nextTodoId
    };
}

export default Todo;
