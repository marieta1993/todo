import React from 'react';
import Article from './Article';
import Filter from './Filter';
const divStyle = {
    color: 'white',
    backgroundColor:'#cc0c0c'
};


const App = () => {

    return (
        <div className='container'>
            <Filter/>

            <Article title='First' content='Some text' divStyle={divStyle}/>

        </div>
    )
};
export  default  App;