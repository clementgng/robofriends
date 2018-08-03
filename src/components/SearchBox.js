import React from 'react';

/*const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2 tc'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robot name'
        onChange={searchChange}
      />
    </div>
  );
};*/
// this just creates the physical searchbox and shows the text physically
class SearchBox extends React.Component {
  render() {
    const selfprop = this.props;
    const { searchChange } = selfprop;
    return (
      <div className='pa2'>
        <input
          className='pa3 ba b--green bg-lightest-blue'
          type='search'
          placeholder='search robot name'
          onChange={searchChange}
        />
      </div>
    );
  }
}

export default SearchBox;

//ba b--color-- apploies to any border base(ba, bt, br, bl, bb)

//onchange is an HTML event, builtin onchange is an event that occurs anytime an input changes
