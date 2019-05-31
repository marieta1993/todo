import React from 'react';
import News from './News';
const newslist =[
    {content: "Sporting Goods", price: "$49.99", stocked: true, title: "Football"},
    {content: "Sporting Goods", price: "$9.99", stocked: true, title: "Baseball"},
    {content: "Sporting Goods", price: "$29.99", stocked: false, title: "Basketball"},
    {content: "Electronics", price: "$99.99", stocked: true, title: "iPod Touch"},
    {content: "Electronics", price: "$399.99", stocked: false, title: "iPhone 5"},
    {content: "Electronics", price: "$199.99", stocked: true, title: "Nexus 7"}
];
const ListItem = newslist.map((news) => {
    console.log(news);
    return (
        <div className='newsDiv'>
            <News title={news.title} content={news.content}/>
        </div>
    )
});
const Article = () => {
    return (
        <div className='newsDiv'>
            {ListItem}
        </div>
    )
};
export  default  Article;