import React from 'react';
// import $ from 'jquery';

class ExchangeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h3>Crypto-currency Exchanges</h3>
        {this.props.exchanges.map( (exchange) => {
          return <div ></div>;
        })}
      </div>
    );
  }
}

export default ExchangeList;