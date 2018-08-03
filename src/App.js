import React from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

class App extends React.Component {
  // To add state into class in react, need to create constructor()
  // constructor always needs a super() call
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ''
    };
  }
  /*For custom functions in react, always use this type of syntax to keep within the scope
  variable = (...) => {
    // do stuff here
  }*/
  //event is a built in JS objects
  //setState is an asynchronous function based off event and will change as user types into box
  onSearchChange = (event) => {
    console.log('bevent');
    console.log(event);
    this.setState({ searchfield: event.target.value }); //setState is a built in api in react
  };

  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    console.log('bthisonsSearchChange');
    console.log(this.onSearchChange);
    //onSearchChange is a function which will pass whatever is typed into the searchbox to show up
    return (
      <div className='tc'>
        <h1>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />;
      </div>
    );
  }
}

export default App;
