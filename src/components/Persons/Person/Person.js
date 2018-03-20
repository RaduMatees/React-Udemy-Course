import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person-style.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxil';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount');
    if (this.props.position === 0) {
      this.inputElement.focus();
    }
  }

  render() {
    console.log('[Person.js] Inside render()')
    return (
      <Aux classes={classes.Person}>
        <p onClick = {this.props.click}>I am {this.props.name} and I am {this.props.age} years old</p>
        <p>{this.props.children}</p>
        <input
        type='text'
        onChange={this.props.changed}
        value={this.props.name}
        ref={(inp) => {this.inputElement = inp}} />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person, classes.Person);
