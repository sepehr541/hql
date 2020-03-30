import React from 'react';

const StatsCard = (props) => {
    return (
        <div className="card horizontal col s3">
            <div className="card-stacked">
                <div className="card-content">
                    <h4>{props.data}</h4>
                </div>
                <div className="card-action">
                    <h5>{props.title}</h5>
                </div>
            </div>
        </div>
    )
}

export default StatsCard;