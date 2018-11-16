import React from 'react';

class Reset extends React.Component {

  render() {
    return (
      <button type="button" onClick={this.props.zeroCounter}>zero</button>
    );
  }
}

export default Reset;
