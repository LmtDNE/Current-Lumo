import React, { Component } from 'react';
import Input from './Components/inputComponent'



class App extends React.Component {
  
  render() {
    return (
        <section id="container">
          <h1>WELCOME TO THE CURRENCY ROBOT!</h1>
          <Input />
        </section>
      );
  }
}

export default App;