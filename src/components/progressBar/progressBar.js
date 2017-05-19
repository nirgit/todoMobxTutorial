import React from 'react';

import { observer } from 'mobx-react';

const ProgressBar = ({percentage}) => {
    console.log('rendering ProgressBar');
    const progressStyle = {width: 100 * percentage + '%'};

    return <div className="progress-bar">
        <div className='meter' style={progressStyle} />
        <div className='label'>{percentage === 1 ? 'You are done!' : 'Progress'}</div>
    </div>;
};

export default observer(ProgressBar);