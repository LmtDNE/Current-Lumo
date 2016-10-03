import React, { Component } from 'react';
import Input from './Components/inputComponent'


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <section>
          <h1>This App is for currency conversion!</h1>
          <Input />
        </section>
      );
  }
}

export default App;