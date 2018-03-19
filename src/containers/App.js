import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {id: '1', name: 'Radu', age: 26},
      {id: '2', name: 'Alex', age: 25},
      {id: '3', name: 'Mario', age:35}
    ],
    otherState : 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const newPersons = [...this.state.persons];
    newPersons.splice(personIndex, 1);
    this.setState({
      persons: newPersons
    });
  }

  nameChangeHandler = (e, id) => {
    const newStatePersons = [...this.state.persons];
    const currPersonIndex = newStatePersons.findIndex(person => person.id === id);
    newStatePersons[currPersonIndex].name = e.target.value;
    this.setState({
      persons: newStatePersons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  render() {
    let persons = null;
    if (this.state.showPersons){
      persons = (
        <div>
          <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangeHandler} />
        </div>
      )
    }

    return (
      <div className={classes.App}>
        <Cockpit showPersons={this.state.showPersons} persons={this.state.persons} clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
