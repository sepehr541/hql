import React, { useEffect, useRef } from 'react';

const List = (props) => {
    const items = useRef([]);
    useEffect(() => {
        console.log(props.data);
        items.current = props.data.map(d => <li className="collection-item">{d}</li>)
        
    }, [items, props.data])
    console.log(props.data)
    return (
        <div className='col s3'>
            <ul className="collection with-header">
                <li className="collection-header">{props.title}</li>
                {items.current}
            </ul>
        </div>
    )
}

export default List;