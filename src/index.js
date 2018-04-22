import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// Path references are needed to import our code.
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCmLl0MlFATk2uUbUOgQypJ6O9fiDDgVUw';

/* Create a new component. This component should produce some HTML
 * We're creating classes not an instance here */
 // A functional component (it has no concept of state)
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({
      key: API_KEY,
      term: 'kittens'
    }, videos => this.setState({ videos }) );

  }
   // html stuff is JSX
  render() {
    return ( // Multi-line JSX with ()
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}
/* "Render component" aka Add component's generated HTML to the DOM */
ReactDOM.render(<App />, document.querySelector('.container'));
