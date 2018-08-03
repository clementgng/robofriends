import React from 'react';
//hello
// you can only return 1 element

  /*const Card = props => {
  const { name, email, id } = props;
  return (
    <div className='tc bg-light-blue dib br4 pa2 ma3 grow-large bw5 shadow-5'>
      <img
        alt='robots'
        src={`https://robohash.org/${id}`}
        width='200'
        height='200'
      />
      <div>
        <h2 className='bg-green dib pink'> {name}</h2>
        <p className='pink'>{email}</p>
      </div>
    </div>
  );
};*/

class Card extends React.Component {
  render() {
    const selfprop = this.props;
    const { name, email, id } = selfprop;
    return (
      <div className='tc bg-light-blue dib br4 pa2 ma3 grow-large bw5 shadow-5'>
        <img
          alt='robots'
          src={`https://robohash.org/${id}`}
          width='200'
          height='200'
        />
        <div>
          <h2 className='bg-green dib pink'> {name}</h2>
          <p className='pink'>{email}</p>
        </div>
      </div>
    );
  }
}

export default Card;
