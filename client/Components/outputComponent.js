import React,{Component} from 'react';
import Loading from "react-loading";


class Output extends React.Component {
//Functionality to display conversion in formatted manner
  currencyConverter() {
    let convertedCurrency = this.props.currency * this.props.rate;
    setTimeout(()=> {
      let checker = document.getElementById("output_checkbox");
      checker.checked = false;
    }, 5000);
    return "€ " + convertedCurrency.toFixed(2);

  }

  render() {
    return (
        <section >
          <div id="output_currency">
            <input type="checkbox" id="output_checkbox" defaultChecked />
            <div className="closed_door"><Loading type='bars' id="loading" color='silver' height='95' width='175' margin='10' /></div>
            <div id="output_amount">
              {this.currencyConverter()}
            </div>
          </div>
        </section>
      )
  }
}

export default Output;
