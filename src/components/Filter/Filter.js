import React from 'react';
import  Search from '../Search/Search';
import  Button from '../Button/Button';
import  './Filter.css';
const Filter = () => {
    return (
        <div className='d-flex justify-content-between' >
            <Search/>
            <div className='d-flex justify-content-between col-sm-6'>
                <Button name={"Hot"}/>
                <Button name={"ST"}/>
                <Button name={"All"}/>
            </div>

        </div>
    )
};
export  default  Filter;