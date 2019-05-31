import React from 'react';
import News from './News';

const Article = (props) => {
    return (
            <div className='d-flex justify-content-between flex-wrap'>
                {props.newsList.map((item)=>
                    <News title={item.title} content={item.content} key={item.id}/>
                )}
            </div>
    )
};
export  default  Article;