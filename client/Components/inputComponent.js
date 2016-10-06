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

//Functionality to convert users input amount to EUR
  conversionHandler (e, dollar, cents) {
    e.preventDefault();

    //Request api.fixer.io for latest conversion rates 
    fetch("//api.fixer.io/latest?base=USD").then((response) => {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then((conversion) => {
        //Convert amoutn and update the state with new amount
        this.setState({ currency: parseFloat(dollar.value + "."+ cents.value), converted: true, rate: conversion.rates.EUR});
    });

  }
//Functionality to reset state for new conversions
  previousHelper (e) {
    e.preventDefault();
    this.setState({ currency: 0, converted: false, rate:0});
    let form = document.getElementById("input_form");
    form.reset();
  } 

  render() {
    return (
      <section className="usd_input">
        <div className="speech_bubble">
          <h1>Welcome!</h1>
          <p>
            I'm the Currency Robot.
            I will convert your U.S. Dollars into Euros and display it to you!
            Simply enter the amount you would like converted into my tummy and click submit, 
            I'll do the rest! 
          </p>
        </div>
        <img src="./style/images/electronic_wave.gif" id="left_eye" />
        <img src="./style/images/electronic_wave.gif" id="right_eye" />
        <div className="input_container">
          <form id="input_form" onSubmit={e => this.conversionHandler(e, this.dollar, this.cents)}>
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
              id="submit_dummy"
              type="submit"
              name="submit_currency"/>
          </form>
        {this.state.converted !== false ? <Output {... this.state} /> : null}
        </div>
        {this.state.converted === false ? <button type="button" id="submit_input" onClick={e => this.conversionHandler(e, this.dollar, this.cents)}>SUBMIT</button> : null}

        <button type="button" id="back_button" onClick={e => this.previousHelper(e)}>BACK</button>
      </section>

      )
  }
}

export default Input;
        





