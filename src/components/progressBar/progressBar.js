import React from 'react';

const ProgressBar = ({percentage}) => {
    const progressStyle = {width: 100 * percentage + '%'};

    return <div className="progress-bar">
        <div className='meter' style={progressStyle} />
        <div className='label'>{percentage === 1 ? 'You are done!' : 'Progress'}</div>
    </div>;
};

export default ProgressBar;