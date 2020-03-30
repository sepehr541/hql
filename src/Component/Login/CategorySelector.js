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
            <select id='categorySelect' onChange={props.handleChange}>
                <option value="" disabled selected>Choose your option</option>
                <option value="employeeField">Employee</option>
                <option value="roomField">Room</option>
                <option value="eventField">Event</option>
                {props.visitor ? <option value='visitorField'>Visitor</option>: null}
            </select>
            <label>Category</label>
        </div>
    )
}

export default CategorySelector;