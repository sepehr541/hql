import React from 'react';
import { useHistory } from 'react-router-dom';

const BackButton = (props) => {
    const history = useHistory();
    return (
        <button className='btn col s2 ' onClick={() => history.push('/dashboard')}>
            <i className='small material-icons'>arrow_back</i>
        </button>
    )
}

export default BackButton;

