import React from 'react';

const Scroll = props => {
  const {children } = props;
  return (
      <div style={{ overflowY: 'scroll', border: '3px solid black', height: '750px'}}>
          { children }
      </div>
  );
};
/*class Scroll extends React.Component {
  render() {
    const selfprops = this.props;
    return (
        <div style={{ overflowY: 'scroll', border: '3px solid black', height: '750px'}}>
            { selfprops.children }
        </div>
    );
  }
}*/

export default Scroll;
