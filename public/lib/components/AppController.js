import React from 'react';
import API from '../API';
import List from './List';
import Form from './Form';

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
    console.log('did mount');
    // fetch bookmark data from our API
    API.getBookmarks()
      .done(data => {
        console.log(data);
        this.setState( {bookmarks: data.links} );
      })
      .fail(err => console.log("Error fetching bookmark list", err))
  }
  addBookmark(newBookmark) {
    API.addBookmark(newBookmark)
      .done(added => {
        console.log("Successfully added", added)
        this.setState( {bookmarks: this.state.bookmarks.concat(added)} )
      })
      .fail(err => console.log("Error adding bookmark", err))
  }
  render() {
    console.log('render');
    return (
      <div>
        <h1>Modular Bookmarks</h1>
        <List bookmarks={this.state.bookmarks} />
        <Form addBookmark={this.addBookmark.bind(this)} />
      </div>
    );
  }
}

export default AppController;
