import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
// import Radium, { StyleRoot } from 'radium';
import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
    persons: [
       {id: "aj01", name: "Ajay", age: 19},
       {id: "aj02", name: "Nancy", age: 18},
       {id: "aj03", name: "Raj", age: 18}
     ],
     otherState: 'something',
     showPersons: false
  }

  // switchNameHandler = (newName) => {
    // console.log("Hi,bro!!!!!")
    // this.setState({
      // persons: [
        // {name: newName, age:20},
        // {name: "Adam", age:19},
        // {name: "Rexha", age:18}
      // ]
    // })
  // }

  deletePersonHandler = (personIndex) => {
      // const persons = this.state.persons.slice();
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons:persons})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex] 
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState( {persons:persons} );
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons 
                 persons = {this.state.persons}
                 clicked = {this.deletePersonHandler}
                 changed = {this.nameChangedHandler} />;
    }

    return (
      <div className={classes.App}>
        <Cockpit
          appTitle = {this.props.title}
          showPersons = {this.state.showPersons}
          persons = {this.state.persons}
          clicked = {this.togglePersonHandler}/>
        {persons}
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi!!!, I\'m a react developer'));
  }
}

export default App;
