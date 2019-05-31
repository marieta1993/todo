import React from 'react';
const News = (props) => {
    return (
        <div className="card">
            <div className="card-body" key={props.id}>
                    <span className="badge badge-pill badge-danger">Hot</span>

                    <span className="badge badge-pill badge-warning">New</span>

                <div className="card-title news_header">
                    <h1>{props.title}</h1>
                </div>
                <div className="card-text news_content">
                    <p>{props.content}</p>
                </div>
                <a href="#" className="card-link">Post edit</a>
                <a href="#" className="card-link">Remove</a>

            </div>
        </div>
    )
};
export  default  News;