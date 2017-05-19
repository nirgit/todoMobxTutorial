import React from 'react';
// GET THE OBSERVER FOR REACT COMPONENTS
import { observer } from 'mobx-react';

const TodoLine = ({id, text, isDone, toggleDone}) => {
    console.log('rendering TodoLine', id);
    return <li key={id}><input onClick={e => toggleDone(id)} type="checkbox" checked={isDone} />{text}</li>
};


// REMOVE THE MOBX "OBSERVER" TO SEE CHANGES IN RENDERING WHEN TOGGLING AN 'isDone' CHECKBOX. OPEN CONSOLE TO SEE PRINTS.
// COMMENT THE LINE BELOW
export default observer(TodoLine);
// UNCOMMENT THE LINE BELOW
// export default TodoLine;
