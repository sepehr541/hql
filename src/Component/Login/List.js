import React from 'react';

const List = (props) => {
    return (
        <div className='col s3'>
            <ul className="collection with-header">
                <li key={Math.random(1,43424)} className="collection-header">{props.title}</li>
                {props.data.map(d => <li key={Math.random(1,434322)} className="collection-item">{d}</li>)}
            </ul>
        </div>
    )
}

export default List;