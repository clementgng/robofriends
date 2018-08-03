import React from 'react';
import Card from './card.js';
// import { robots, cats } from './robots';
// in JSX use map instead of forEach, map returns an array, forEach retuns nothing
{
  /*const CardList = ({ robots }) => {
  const cardComponent = robots.map((robot, i) => {
    return (
      <Card
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
        key={i}
      />
    );
  }); // forEach/map ends here.. always return when using map
  return <div>{cardComponent}</div>;
};*/
}

class CardList extends React.Component {
  render() {
    const selfprop = this.props;
    const { robots } = selfprop;
    const cardComponent = robots.map((robot, i) => {
      return (
        <Card
          id={robots[i].id}
          name={robots[i].name}
          email={robots[i].email}
          key={i}
        />
      );
    }); // forEach/map ends here.. always return when using map
    return <div>{cardComponent}</div>;
  }
}

export default CardList;
