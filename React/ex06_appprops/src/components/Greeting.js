import React from 'react';

const Greeting = (props) => {
    return (
        <>
        <h1>Hello , {props.name}</h1>
        <h3>Hello {props.uname}</h3>
        <h3>Hello {props.count}</h3>
        </>
    );
};

export default Greeting;