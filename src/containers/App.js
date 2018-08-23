import React from 'react';
import { connect } from 'react-redux';
import CardList from './../components/CardList';
import ErrorBoundary from './../components/ErrorBoundary';
// import { robots } from './robots';
import SearchBox from './../components/SearchBox';
import Scroll from './../components/Scroll';
import { setSearchField, requestRobots } from './../actions';

const mapStateToProps = state => {
  return {
    /* searchField: state.searchRobots.searchField
    we will need state.[reducer name here].[key name here] when we have more than 1 reducer*/

    // use this for now due to 1 reducer
    // searchField: state.searchField
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

//dispath is a function that takes in an object or a function to become a higher order function
const mapDispatchToProps = (dispatch) => { // dispatch is what triggers the action
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends React.Component {
  // To add state into class in react, need to create constructor()
  // constructor always needs a super() call
  /*constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    };
  }*/

  componentDidMount(){
    this.props.onRequestRobots();
      // this.setState({ robots: robots });
      /*fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          if (response.status === 200) {
              return response.json();
          }
        })
        .then((json) => {
          //json.splice(-1,1);
          this.setState({ robots: json });
      })*/
  }

  /*For custom functions in react, always use this type of syntax to keep within the scope
  variable = (...) => {
    // do stuff here
  }*/
  // event is a built in JS objects
  // setState is an asynchronous function based off event and will change as user types into box
  // don't need to define use const onSearchChange because it is a method inside a class
  /*onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value }); //setState is a built in api in react
  };*/

  render() {
    // use destructuring whenever possible
    // const { robots } = this.state;
    const { searchField, onSearchChange, robots, isPending, error } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(searchField.toLowerCase());
    });
    //onSearchChange is a function which will pass whatever is typed into the searchbox to show up
    if (isPending) {
        return <h1 className='tc f1'>LOADING...</h1>;
    } else {
        return (
          <div className='tc'>
            <h1 className='f1'>Robofriends</h1>
            <SearchBox searchChange={onSearchChange} />
            <Scroll>
              <ErrorBoundary>
                <CardList robots={filteredRobots} />;
              </ErrorBoundary>
            </Scroll>
          </div>
        );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
/*
connect is a higher order function
connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])

higher order functions are functions that return another function to run

in ex above, connect() will return a function, where we pass App. App function will be run
App will see that there is a store to connect to after mapStateToProps and mapDispatchToProps
mapStateToProps- Function that contains the States that we want App to look for
mapDispatchToProps- Function/Object that contains the Actions that we want App to look for

then we give App the states and actions defined in the objects mapStateToProps and mapDispatchToProps
*/
