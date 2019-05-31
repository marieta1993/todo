import React from 'react';
const News = (props) => {
    return (
        <div>
            <div className="news_header">
                <h1>{props.title}</h1>
            </div>
            <div className="news_content">
                <p>{props.content}</p>
            </div>

        </div>
    )
};
export  default  News;