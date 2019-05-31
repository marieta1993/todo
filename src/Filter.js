import React from 'react';
import  Search from './Search';
import  Button from './Button';
const Filter = () => {
    return (
        <div>
            <Search/>
            <Button name={"Hot"}/>
            <Button name={"ST"}/>
            <Button name={"All"}/>

        </div>
    )
};
export  default  Filter;