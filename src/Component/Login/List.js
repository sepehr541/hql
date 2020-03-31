import React, { useEffect, useRef} from 'react';

const List = (props) => {
    const items = useRef([]);
    useEffect(() => {
        items.current = props.data.map(data => <li className="collection-item">{data}</li>)
    }, [items, props.data])

    return (
        <ul class="collection with-header">
            <li class="collection-header"><h4>{props.title}</h4></li>
            {items}
        </ul>
    )
}

export default List;