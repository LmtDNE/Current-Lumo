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

  render() {
    return (
      <section className="usd-input">
        <button type="button" id="antenna_button">$</button>
        <div className="input_container">
          <div className="closed_door">
            <input 
              type="checkbox"
              defaultChecked />
          </div>
        <form id="input_form" onSubmit={e => this.inputFunction(e, this.dollar, this.cents)}>
          <input  
            id="dollar_amount"
            type="number"
            min="0"
            step="1"
            ref={input => this.dollar = input}
            name="dollars"/>
          <input
            id="cents_amount"
            type="number"
            maxLength="2"
            ref={input => this.cents = input}
            min="0"
            max='99'
            step='1'
            name="cents:" />
          <input
            id="submit_input"
            type="submit"
            name="submit_currency"/>
        </form>
        {this.state.converted !== false ? <Output {... this.state} /> : null}
        </div>
      </section>

      )
  }
}

export default Input;
        





