import React from 'react';
// GET THE OBSERVER FOR REACT COMPONENTS
import { observer } from 'mobx-react';


const TodoList = ({todos, toggleDone}) => {
    console.log('rendering TodoList');
    return <ul>
        {todos.map(t => <li key={t.id}><input onClick={e => toggleDone(t.id)} type="checkbox" checked={t.isDone} />{t.text}</li>)}
    </ul>;
};

export default observer(TodoList);