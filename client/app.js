import React, { Component } from 'react';
import Input from './Components/inputComponent'



class App extends React.Component {
  
  render() {
    return (
        <section id="container">
          <div className="bubble" >
            <h1>Welcome!</h1>
            <p>
              I'm the Currency Robot.
              I will convert your U.S. Dollars into Euros and display it to you!
              Simply enter the amount you would like converted into my tummy and click submit, 
              I'll do the rest! 
            </p>
          </div>
          <Input />
        </section>
      );
  }
}

export default App;