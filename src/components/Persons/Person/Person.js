import React, { Component } from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';
// import Radium from 'radium';

class Person extends Component {

	constructor( props ) {
    super(props);
    console.log("[Person.js] inside constructor");
  }


  componentWillMount() {
    console.log("[Person.js] inside componentWillMount");
  }

  componentDidMount() {
    console.log("[Person.js] inside componentDidMount");
  }
	render() {
		    console.log("[Person.js] inside render");
            return (
    	      <WithClass classes={classes.Person}>
    	        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old.</p>
    	        <p>{this.props.children}</p>
    	        <input onChange={this.props.change} value={this.props.name} />
    	      </WithClass>
    	);		
	}
}

export default Person;
