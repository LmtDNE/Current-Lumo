import React,{Component} from 'react';



class Output extends React.Component {
//Functionality to display conversion in formatted manner
  currencyConverter() {
    let convertedCurrency = this.props.currency * this.props.rate;
    return "€ " + convertedCurrency.toFixed(2);

  }

  render() {
    return (
        <section >
          <div id="output_currency">
            <input type="checkbox" defaultChecked />
            <div className="closed_door"><p>CLICK HERE!</p></div>
            <div id="output_amount">
              {this.currencyConverter()}
            </div>
          </div>
        </section>
      )
  }
}

export default Output;
