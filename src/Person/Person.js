import React from 'react';
import classes from './Person.css';
// import Radium from 'radium';
const person = (props) => {
    const rnd = Math.random();

    if(rnd > 0.7) {
    	throw new Error ( 'Somethiong Went Wrong' );
    }

    return (
    	    <div className={classes.Person}>
    	      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old.</p>
    	      <p>{props.children}</p>
    	      <input onChange={props.change} value={props.name} />
    	    </div>
    	);
}

export default person;
