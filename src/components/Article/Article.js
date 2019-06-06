import React from 'react';
import News from '../News';
import './Article.css';

const Article = (props) => {
    const data =   props.newsList.map((item)=>
            <News title={item.title} content={item.content} key={item.id}/>
        );
    return (
            <div className='d-flex justify-content-between flex-wrap'>
                {data}
            </div>
    )
};
export  default  Article;