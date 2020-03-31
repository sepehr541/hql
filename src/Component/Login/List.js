import React, { useEffect, useRef} from 'react';

const List = (props) => {
    const items = useRef([]);
    useEffect(() => {
        items.current = props.data.map(data => <li className="collection-item">{data}</li>)
    })

    return (
        <ul className="collection with-header">
            <li className="collection-header"><h4>{props.title}</h4></li>
            {items.current}
        </ul>
    )
}

export default List;