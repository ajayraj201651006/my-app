import React, { Component } from 'react';
import './App.css';
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
         {this.state.persons.map((person,index) => {
            return <Person
                    click = {() => this.deletePersonHandler(index)}
                    name = {person.name}
                    age = {person.age}
                    key = {person.id} />
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
