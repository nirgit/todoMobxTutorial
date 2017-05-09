let nextTodoId = 0;

function Todo(text) {
    nextTodoId++;
    return {
        isDone: false,
        text,
        id: nextTodoId
    };
}

export default Todo;
