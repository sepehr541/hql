import React from 'react';
import './LoadingBar.css';

const LoadingBar = (props) => {
    return (
        <div id='LoadingBar' className="progress center">
            <div className="indeterminate"></div>
        </div>
    )
}

export default LoadingBar;