import React from 'react';

const List = (props) => {
    return (
        <div className='col s3'>
            <ul class="collection with-header">
                <li class="collection-header">{props.title}</li>
                {props.data.map(d => <li className="collection-item">{d}</li>)}
            </ul>
        </div>
    )
}

export default List;