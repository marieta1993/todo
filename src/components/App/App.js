import React from 'react';
import Header from '../Header';
import Article from '../Article';
import Filter from '../Filter';
import './App.css'
const newsList =[
    {id:"1",content: "Sport News", divColor: "#aff", status: true, title: "Football"},
    {id:"2",content: "Sport News", divColor: "#eda", status: true, title: "Baseball"},
    {id:"3",content: "Sport News", divColor: "#bad", status: false, title: "Basketball"},
    {id:"4",content: "Electronics News", divColor: "#dac", status: true, title: "iPod Touch"},
    {id:"5",content: "Electronics News", divColor: "#fba", status: false, title: "iPhone 5"},
    {id:"6",content: "Electronics News", divColor: "#0ab", status: true, title: "Nexus 7"}
];
const App = () => {

    return (
        <div >
            <Header />
            <div className='container'>
                <h1 className='text-center'>SEARCH NEWS</h1>
                <Filter/>
                <Article newsList={newsList}/>
            </div>
        </div>
    )
};
export  default  App;