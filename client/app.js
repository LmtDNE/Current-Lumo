import React, { Component } from 'react';
import Input from './Components/inputComponent'



class App extends React.Component {
  
  render() {
    return (
        <section id="container">
          <h1>This App is for currency conversion!</h1>
          <Input />
        </section>
      );
  }
}

export default App;