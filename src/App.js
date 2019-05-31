import React from 'react';
import Article from './Article';
import Filter from './Filter';
const newsList =[
    {id:"1",content: "Sporting Goods", divColor: "$49.99", status: true, title: "Football"},
    {id:"2",content: "Sporting Goods", divColor: "$9.99", status: true, title: "Baseball"},
    {id:"3",content: "Sporting Goods", divColor: "$29.99", status: false, title: "Basketball"},
    {id:"4",content: "Electronics", divColor: "$99.99", status: true, title: "iPod Touch"},
    {id:"5",content: "Electronics", divColor: "$399.99", status: false, title: "iPhone 5"},
    {id:"6",content: "Electronics", divColor: "$199.99", status: true, title: "Nexus 7"}
];
const App = () => {

    return (
        <div className='container'>
            <h1 className='text-center'>SEARCH NEWS</h1>
            <Filter/>
            <Article newsList={newsList}/>

        </div>
    )
};
export  default  App;