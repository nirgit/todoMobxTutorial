import React from 'react';
// GET THE OBSERVER FOR REACT COMPONENTS
import { observer } from 'mobx-react';

import TodoLine from '../todoLine/todoLine';

const TodoList = ({todos, toggleDone}) => {
    console.log('rendering TodoList');
    return <ul>
        {todos.map(t => <TodoLine key={t.id} toggleDone={toggleDone} {...t} />)}
    </ul>;
};

export default observer(TodoList);