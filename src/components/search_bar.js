import React, { Component } from 'react';

class SearchBar extends Component {
  // How we initialize state in a class based component.
  constructor(props) {
    super(props); // if you don't call super, you get an error.

    this.state = { term: '' };
  }

  render() { // Every class must have a render function
    // Whenever using JS in JSX, use curly braces
    return (
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange={ event => this.setState({ term: event.target.value })} />
      </div>
    );
  }

}

// So other files can use this component
export default SearchBar;
