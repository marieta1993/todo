import React from 'react';
import  Search from './Search';
import  Button from './Button';
const Filter = () => {
    return (
        <div>
            <Search/>
            <div className='d-flex justify-content-between'>
                <Button name={"Hot"}/>
                <Button name={"ST"}/>
                <Button name={"All"}/>
            </div>

        </div>
    )
};
export  default  Filter;