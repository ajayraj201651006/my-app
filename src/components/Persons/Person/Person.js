import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxes';
import PropTypes from 'prop-types';
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
    if(this.props.position === 0) {
      this.inputElement.focus();
    }
  }
	render() {
		    console.log("[Person.js] inside render");
            return (
    	      <Aux>
    	        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old.</p>
    	        <p>{this.props.children}</p>
    	        <input
    	          ref={(inp) => {this.inputElement = inp}} 
    	          onChange={this.props.change} 
    	          value={this.props.name} />
    	      </Aux>
    	);		
	}
}

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	change: PropTypes.func
};

export default withClass(Person, classes.Person);
