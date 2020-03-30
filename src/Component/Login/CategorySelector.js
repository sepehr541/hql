import React, {useEffect} from 'react';
import M from 'materialize-css'
const CategorySelector = (props) => {
    useEffect(() => {
        // initalizes the select fields
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems, {});
        
    },[])
    return (
        <div className="input-field col s3">
            <select id={props.id} onChange={props.handleChange}>
                <option value="" disabled selected>Choose your option</option>
                {props.options.map(opt => <option value={`${opt}`}>{opt}</option>)}
            </select>
            <label>{props.label}</label>
        </div>
    )
}

export default CategorySelector;