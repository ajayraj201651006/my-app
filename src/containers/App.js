import React, { PureComponent } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
// import Radium, { StyleRoot } from 'radium';
import Persons from '../components/Persons/Persons';
import WithClass from '../hoc/WithClass';

class App extends PureComponent {
  constructor( props ) {
    super(props);
    console.log("[App.js] inside constructor", props);
    this.state = {
                  persons: [
                     {id: "aj01", name: "Ajay", age: 19},
                     {id: "aj02", name: "Nancy", age: 18},
                     {id: "aj03", name: "Raj", age: 18}
                   ],
                   otherState: 'something',
                   showPersons: false
            };
  }


  componentWillMount() {
    console.log("[App.js] inside componentWillMount");
  }

  componentDidMount() {
    console.log("[App.js] inside componentDidMount");
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[UPDATE App.js] inside shouldComponentUpdate",nextProps,nextState);
  //   // return true;
  //   return nextState.persons !== this.state.persons ||
  //          nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log("[UPDATE App.js] inside componentWillUpdate",nextProps, nextState);
  }

  componentDidUpdate() {
    console.log("[UPDATE App.js] inside componentDidUpdate");
  }

  // state = {
  //   persons: [
  //      {id: "aj01", name: "Ajay", age: 19},
  //      {id: "aj02", name: "Nancy", age: 18},
  //      {id: "aj03", name: "Raj", age: 18}
  //    ],
  //    otherState: 'something',
  //    showPersons: false
  // }

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
    console.log("[App.js] inside render");
    let persons = null;

    if(this.state.showPersons) {
      persons = <Persons 
                 persons = {this.state.persons}
                 clicked = {this.deletePersonHandler}
                 changed = {this.nameChangedHandler} />;
    }

    return (
      <WithClass classes={classes.App}>
        <button onClick={()=>{this.setState({showPersons: true})}}>Show Pesons</button>
        <Cockpit
          appTitle = {this.props.title}
          showPersons = {this.state.showPersons}
          persons = {this.state.persons}
          clicked = {this.togglePersonHandler}/>
        {persons}
      </WithClass>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi!!!, I\'m a react developer'));
  }
}

export default App;
