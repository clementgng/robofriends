import React from 'react';

class Scroll extends React.Component {
  render() {
    const selfprops = this.props;
    return (
        <div style={{ overflowY: 'scroll', border: '3px solid black', height: '500px'}}>
            { selfprops.children }
        </div>
    );
  }
}

export default Scroll;
