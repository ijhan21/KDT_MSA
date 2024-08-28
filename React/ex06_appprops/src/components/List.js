import React from 'react';

const List = ({items}) => {
    return (
        <div>
               {  //jsx 문법
                    items.map((item,index) => (
                        <li key={index}>{item}</li>
                    ))
                   
               } 
        </div>
    );
};

export default List;

