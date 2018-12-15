import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
       {name: "Ajay", age: 19},
       {name: "Nancy", age: 18},
       {name: "Raj", age: 18}
     ],
     otherState: 'something',
     showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log("Hi,bro!!!!!")
    this.setState({
      persons: [
        {name: newName, age:20},
        {name: "Adam", age:19},
        {name: "Rexha", age:18}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: "Ajay", age:19},
        {name: event.target.value, age:18},
        {name: "Raj", age:18}
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer' 
    }
    
    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
         {this.state.persons.map(person => {
            return <Person
                    name = {person.name}
                    age = {person.age} />
         })}
         </div> 
        );
    }

    return (
      <div className="App">
        <h1>Hi!! I am a react developer</h1>
        <p>Hii there!!!!</p>
        <button style={style} onClick={this.togglePersonHandler}>Switch Name</button>
        {persons}
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi!!!, I\'m a react developer'));
  }
}

export default App;
