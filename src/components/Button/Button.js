import  React from 'react';
import './Button.css';
const Button = (props) => {
    return (
        <div className='form-group col-sm-3'>
            <button className='btn btn-outline-success form-control' type="button">{props.name}</button>
        </div>
    )
};
export default  Button;