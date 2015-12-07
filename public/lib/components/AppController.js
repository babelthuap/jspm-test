import React from 'react';
import $ from "jquery";
import List from './List';

console.log('in AppController');


class AppController extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'AppController';

    this.state = {
      bookmarks: []
    };
    
  }
  componentDidMount() {
    // fetch bookmark data from our API
    $.get('/api/links')
      .done(data => {
        console.log(data);
        this.setState( {bookmarks: data.links} );
      })
  }
  render() {
    return (
      <div>
        <h1>Bookmarks</h1>
        <List bookmarks={this.state.bookmarks} />
      </div>
    );
  }
}

export default AppController;
