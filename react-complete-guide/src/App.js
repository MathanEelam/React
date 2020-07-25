import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personState, setPersonState] = useState({
    persons: [
      {name: 'Max', age: '28'},
      {name: 'Manu', age: '27'},
      {name: 'Nachiyar', age: '26'}
    ],
  });

  const [otherState, setOtherState] = useState('Some other value');

  console.log(personState, otherState);

  const switchNameHandler = () => {
    // console.log("Was clicked");
    // this.state.persons[0].name = 'Mathan Eelam';
    setPersonState({
      persons: [
        {name:'Mathan Eelam', age: 28},
        {name: 'Manu', age: 29},
        {name: 'Nachiyar', age: 27}
      ],
      otherState: personState.otherState
    });
  };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>It's really working</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}>My hobbies: Racing</Person>
        <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, null, React.createElement('h1', null, ' It works now'));
  }


export default app;
