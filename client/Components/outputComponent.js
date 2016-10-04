import React,{Component} from 'react';



class Output extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    console.log("This is props", this.props);
    return (
        <section>
          <h1>This is the conversion output</h1>

        </section>
      )
  }
}

export default Output;