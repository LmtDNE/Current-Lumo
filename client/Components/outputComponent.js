import React,{Component} from 'react';



class Output extends React.Component {

  currencyConverter() {
    console.log("This is props", this.props);
    let convertedCurrency = this.props.currency * this.props.rate;
    return convertedCurrency.toFixed(2);

  }

  render() {

    return (
        <section >
          <h1>This is the conversion output</h1>
          {this.currencyConverter()}
        </section>
      )
  }
}

export default Output;
  // constructor(props) {
  //   super(props)

  // }