import React, { Component } from 'react';
import classes from './App.css';
// import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    
    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
         {this.state.persons.map((person,index) => {
            return <Person
                    click = {() => this.deletePersonHandler(index)}
                    name = {person.name}
                    age = {person.age}
                    key = {person.id} 
                    change = {(event) => this.nameChangedHandler(event, person.id)}/>
         })}
         </div> 
        );

        style.backgroundColor = 'red';
        
    }

    const assignedClasses = [];
    if(this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if(this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi!! I am a react developer</h1>
        <p className={assignedClasses.join(' ')}>Hii Guys!!! How are You?</p>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi!!!, I\'m a react developer'));
  }
}

export default App;
