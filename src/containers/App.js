import React from 'react';
import CardList from './../components/CardList';
// import { robots } from './robots';
import SearchBox from './../components/SearchBox';
import Scroll from './../components/Scroll';

class App extends React.Component {
  // To add state into class in react, need to create constructor()
  // constructor always needs a super() call
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    };
  }

  componentDidMount(){
      // this.setState({ robots: robots });
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          if (response.status === 200) {
              return response.json();
          }
        })
        .then((json) => {
          console.log(json);
          this.setState({ robots: json });
      })
  }

  /*For custom functions in react, always use this type of syntax to keep within the scope
  variable = (...) => {
    // do stuff here
  }*/
  // event is a built in JS objects
  // setState is an asynchronous function based off event and will change as user types into box
  // don't need to define use const onSearchChange because it is a method inside a class
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value }); //setState is a built in api in react
  };

  render() {
    // use destructuring whenever possible
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(searchfield.toLowerCase());
    });
    //onSearchChange is a function which will pass whatever is typed into the searchbox to show up
    if (robots.length === 0) {
        return <h1 className='tc f1'>LOADING...</h1>;
    } else {
        return (
          <div className='tc'>
            <h1 className='f1'>Robofriends</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
                <CardList robots={filteredRobots} />;
            </Scroll>
          </div>
        );
    }
  }
}

export default App;
