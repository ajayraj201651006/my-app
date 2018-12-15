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

    return (
      <div className="App">
        <h1>Hi!! I am a react developer</h1>
        <p>Hii there!!!!</p>
        <button style={style} onClick={this.togglePersonHandler}>Switch Name</button>
        { this.state.showPersons === true ?
         <div>
         <Person 
         name={this.state.persons[0].name} 
         age={this.state.persons[0].age} />

         <Person 
           name={this.state.persons[1].name} 
           age={this.state.persons[1].age}
           click={this.switchNameHandler.bind(this, 'Maxy')}
           change={this.nameChangedHandler}>My hobbies : Singing</Person>

         <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} /> 
         </div> : null
        }
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi!!!, I\'m a react developer'));
  }
}

export default App;
