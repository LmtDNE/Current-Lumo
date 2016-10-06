import React, {Component} from 'react';
import 'isomorphic-fetch';
import Output from './outputComponent';

class Input extends React.Component {
  constructor() {
    super()

    this.state = {
      currency: 0,
      converted: false,
      rate: 0
    }
  }

  inputFunction (e, dollar, cents) {
    e.preventDefault();
    fetch("//api.fixer.io/latest?base=USD").then((response) => {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then((conversion) => {
        this.setState({ currency: parseFloat(dollar.value + "."+ cents.value), converted: true, rate: conversion.rates.EUR});
    });

  }

  reset (e) {
    e.preventDefault();
    this.setState({ currency: 0, converted: false, rate:0});
  } 

  render() {
    return (
      <section className="usd-input">
        <div className="speech-bubble">
          <h1>Welcome!</h1>
          <p>I'm the Currency Robot.
          I will convert your U.S. Dollars into Euros and display it to you!
          Simply enter the amount you would like converted into my tummy and press enter, 
          I'll do the rest! 
          </p>
        </div>
        <img src="./style/images/electronic_wave.gif" id="left_eye" />
        <img src="./style/images/electronic_wave.gif" id="right_eye" />
        <div className="input_container">
        <form id="input_form" onSubmit={e => this.inputFunction(e, this.dollar, this.cents)}>
          <input  
            id="dollar_amount"
            type="number"
            min="0"
            step="1"
            ref={input => this.dollar = input}
            name="dollars"
            placeholder="$00"/>
          <input
            id="cents_amount"
            type="number"
            maxLength="2"
            ref={input => this.cents = input}
            min="0"
            max='99'
            step='1'
            name="cents:" 
            placeholder=".00"/>
          <input
            id="submit_input"
            type="submit"
            name="submit_currency"/>
        </form>
        {this.state.converted !== false ? <Output {... this.state} /> : null}
        </div>
        <button type="button" id="reset" onClick={e => this.reset(e)}>RESET</button>
      </section>

      )
  }
}

export default Input;
        





