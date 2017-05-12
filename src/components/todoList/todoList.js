import React from 'react';

const TodoList = ({todos, toggleDone}) => {
    return <ul>
        {todos.map(t => <li key={t.id}><input onClick={e => toggleDone(t.id)} type="checkbox" checked={t.isDone} />{t.text}</li>)}
    </ul>;
};

export default TodoList;